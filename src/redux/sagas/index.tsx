import { call, put, takeEvery } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import {
  ApiCall,
  PagedApiCall,
  action,
  createBasicActions,
  fetchBaseData,
  logout,
  removeToken,
  updateToken,
  fetchUserProfile,
  APICALL,
  PAGINATED_APICALL,
  LOGIN,
  LOGOUT,
  FETCH_BASE_DATA,
} from '../actions';
import { HttpStatus } from '../../utils';
import {
  USER_PROFILE, apiCall, login, ping,
} from '../../api';
import { MetaData } from '../../models';
import {
  Role,
  defaultAuthState,
  getStateFromToken,
  getToken,
} from '../reducers/auth';


declare type callback = (body: any) => any;
declare type errorHandler = (body: any, response: Response) => any;

// const userProfileActions = createBasicActions<User>(USER_PROFILE_ACTION);

export function* handleResponse(
  response: Response,
  callback: callback,
  error?: errorHandler,
  ignoreStatus = false,
): any {
  try {
    if (response.status === HttpStatus.Ok) {
      const body = yield response.json();
      const authToken = response?.headers
        ?.get('Authorization')
        ?.split('Bearer ')[1];
      if (authToken) {
        yield put(updateToken(authToken));
      }
      const callbackResult = callback(body);
      if (callbackResult) {
        yield* callbackResult;
      }
    } else if (
      !ignoreStatus
      && response.status === HttpStatus.Unauthorized
      // || response.status === HttpStatus.Forbidden
    ) {
      /** @Note
       * Logout user ,Usually we take this path,
       * but sometimes we want to ignore 403's,
       * especially when logging in
       * */
      yield put(logout());
    } else if (error) {
      const body = yield response.json();
      const callbackResult = error(body, response);
      if (callbackResult) {
        yield* callbackResult;
      }
    }
  } catch (e) {
    if (error) {
      const callbackResult = error(e, response);
      if (callbackResult) {
        yield* callbackResult;
      }
    }
  }
}

export function toArray<T>(param: T | T[] | void) {
  if (param) {
    return param instanceof Array ? param.filter((p) => !!p) : [param];
  }

  return [];
}

export function* doApiCall<
  RequestProps,
  SuccessProps extends { _requestDate: Date },
  FailureProps extends Response
>(event: {
  payload: ApiCall<RequestProps, SuccessProps, FailureProps>;
}): Generator<any> {
  const {
    request: {
      requestProps: { payload, method, isFormData },
    },
    success,
    failure,
  } = event.payload;

  const {
    request: {
      requestProps: { endpoint },
    },
  } = event.payload;
  const date = new Date();

  try {
    const result: any = yield call(
      apiCall,
      endpoint,
      method,
      payload,
      isFormData,
    );
    yield* handleResponse(
      result,
      function* handleSuccess(body: SuccessProps) {
        const newBody = body;
        if (typeof body === 'object') {
          // eslint-disable-next-line no-underscore-dangle
          newBody._requestDate = date;
        }
        if (success.resolve) {
          const actions = toArray(success.resolve(newBody));
          yield* actions.map((act) => put(act));
        }
      },
      function* handleFailure(body: FailureProps): any {
        if (failure.reject) {
          const actions = toArray(failure.reject(body));
          yield* actions.map((act) => put(act));
        }
      },
    );
  } catch (e) {
    console.log(e); // eslint-disable-line no-console
  }
}

export function getPaginationParameters(filter: MetaData<any>): string {
  const {
    order,
    //  direction,
    page,
    limit,
    filters,
  } = filter;
  const simpleParams = {
    order,
    //  direction,
    page,
    limit,
  };

  let filterParams: string[] = [];

  Object.keys(filters).forEach((key) => {
    filterParams = filterParams.concat(
      filters[key] ? [`filter[${key}]=${filters[key]}`] : [],
    );
  });

  return Object.keys(simpleParams)
    .map((key: keyof typeof simpleParams) => (simpleParams[key] ? `${key}=${String(simpleParams[key])}` : ''))
    .concat(filterParams)
    .filter((value) => value)
    .join('&');
}

export function* doPaginatedApiCall<MetaDataProps, SuccessProps>(event: {
  payload: PagedApiCall<MetaDataProps>;
}): Generator<any> {
  const {
    request: { endpoint, filter, loadMore: isLoadMore },
    update,
    loadMore,
  } = event.payload;
  const finalEndpoint = `${endpoint}?${getPaginationParameters(filter)}`;
  try {
    const result: any = yield call(apiCall, finalEndpoint);
    yield* handleResponse(result, function* handleSuccess(body: SuccessProps) {
      if (isLoadMore) {
        yield put(action(loadMore.action, body));
      } else {
        yield put(action(update.action, body));
      }
    });
  } catch (e) {
    console.log(e); // eslint-disable-line no-console
  }
}

export function* doFetchBaseData(): Generator<any> {
  if (getToken()) {
    const result: any = yield call(ping);
    yield* handleResponse(
      result,
      function* handleFetchUserProfile() {
        yield put(fetchUserProfile());
      },
      function* handleLogout() {
        yield put(logout());
      },
      true,
    );
  } else {
    yield put(logout());
  }
}

export function* doFetchUserProfile(): Generator<any> {
  const result: any = yield call(apiCall, USER_PROFILE);
  yield* handleResponse(result, function* handleUserProfileResponse(response) {
    // yield put(userProfileActions.update(response || {}));
  });
}

export function* doLogin(event: any): Generator<any> {
  try {
    const result: any = yield call(login, event?.payload?.formData);
    yield* handleResponse(
      result,
      function* handleSuccess(body) {
        const newState = getStateFromToken(defaultAuthState, body?.token);
        if (newState?.role === Role.INVALID) {
          yield event?.payload?.reject({
            message: 'error.login.invalidCredentials',
          });
        } else {
          yield put(updateToken(body?.token));
          yield put(fetchBaseData());
          yield event?.payload?.resolve(body);
        }
      },
      function* handleReject(body: any) {
        yield event?.payload?.reject(body);
      },
      true,
    );
  } catch (e) {
    event?.payload?.reject(e);
  }
}

export function* doLogout() {
  try {
    yield put(removeToken());
  } catch (error) {
    console.log(error); // eslint-disable-line no-console
  }
}

export function* rootSaga(): SagaIterator<void> {
  yield takeEvery(APICALL, doApiCall as any);
  yield takeEvery(PAGINATED_APICALL, doPaginatedApiCall as any);
  yield takeEvery(LOGIN, doLogin);
  yield takeEvery(LOGOUT, doLogout);
  yield takeEvery(FETCH_BASE_DATA, doFetchBaseData);
 
}
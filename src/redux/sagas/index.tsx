import { call, put, takeEvery } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import {
  APICALL,
  ApiCall,
  FETCH_BASE_DATA,
  LOGIN,
  LOGOUT,
  PAGINATED_APICALL,
  PagedApiCall,
  action,
  fetchBaseData,
  logout,
  removeToken,
  updateToken,
  fetchUserProfile,
  FETCH_PROFILE,
  updateProfile,
  showLoader,
  hideLoader,
} from "../actions";
import { HttpMethods, HttpStatus } from "../../utils";
import { apiCall, login, ping, profile } from "../../api";
import { MetaData } from "../../models";
import {
  Role,
  defaultAuthState,
  getStateFromToken,
  getToken,
} from "../reducers/auth";

declare type callback = (body: any) => any;
declare type errorHandler = (body: any, response: Response) => any;

export function* handleResponse(
  response: Response,
  callback: callback,
  error?: errorHandler,
  ignoreStatus = false
): any {
  try {
    if (response.status === HttpStatus.Ok) {
      const body = yield response.json();
      // const authToken = response?.headers
      //   ?.get("Authorization")
      //   ?.split("Bearer ")[1];
      // if (authToken) {
      //   yield put(updateToken(authToken));
      // }
      const callbackResult = callback(body);

      if (callbackResult) {
        yield* callbackResult;
        yield put(hideLoader());
      }
    } else if (
      !ignoreStatus &&
      response.status === HttpStatus.Unauthorized
      // || response.status === HttpStatus.Forbidden
    ) {
      /** @Note
       * Logout user ,Usually we take this path,
       * but sometimes we want to ignore 403's,
       * especially when logging in
       * */
      yield put(hideLoader());
    } else if (error) {
      const body = yield response.json();
      yield put(hideLoader());
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

function toArray<T>(param: T | T[] | void) {
  if (param) {
    return param instanceof Array ? param.filter((p) => !!p) : [param];
  }

  return [];
}

function* doApiCall<
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
    if (method === HttpMethods.GET) {
      yield put(showLoader());
    }
    const result: any = yield call(
      apiCall,
      endpoint,
      method,
      payload,
      isFormData
    );
    yield* handleResponse(
      result,
      function* (body: SuccessProps) {
        const newBody = body;
        if (typeof body === "object") {
          newBody._requestDate = date;
        }
        if (success.resolve) {
          const actions = toArray(success.resolve(newBody));
          yield* actions.map((act) => put(act));
        }
      },
      function* (body: FailureProps): any {
        if (failure.reject) {
          const actions = toArray(failure.reject(body));
          yield* actions.map((act) => put(act));
        }
      }
    );
  } catch (e) {
    console.log(e); // eslint-disable-line no-console
  }
}

export function getPaginationParameters(filter: MetaData<any>): string {
  const { order, direction, page, limit, filters } = filter;
  const simpleParams = {
    order,
    direction,
    page,
    limit,
  };

  let filterParams: string[] = [];

  Object.keys(filters).forEach((key) => {
    filterParams = filterParams.concat(
      filters[key] ? [`filter[${key}]=${filters[key]}`] : []
    );
  });

  return Object.keys(simpleParams)
    .map((key: keyof typeof simpleParams) =>
      simpleParams[key] ? `${key}=${String(simpleParams[key])}` : ""
    )
    .concat(filterParams)
    .filter((value) => value)
    .join("&");
}

function* doPaginatedApiCall<
  MetaDataProps,
  SuccessProps,
  FailureProps extends Response
>(event: { payload: PagedApiCall<MetaDataProps> }): Generator<any> {
  const {
    request: { endpoint, filter, loadMore: isLoadMore },
    update,
    loadMore,
  } = event.payload;
  const finalEndpoint = `${endpoint}?${getPaginationParameters(filter)}`;
  try {
    const result: any = yield call(apiCall, finalEndpoint);
    yield* handleResponse(result, function* (body: SuccessProps) {
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

function* doFetchBaseData(): Generator<any> {
  if (getToken()) {
    yield put(showLoader());
    const result: any = yield call(ping);
    yield* handleResponse(
      result,
      function* () {
        /** @Note Add actions to fetch initial data */
        yield put(fetchUserProfile());
      },
      function* () {},
      true
    );
  } else {
    yield put(hideLoader());
  }
}

function* doLogin(event: any): Generator<any> {
  try {
    const result: any = yield call(login, event?.payload?.formData);
    yield* handleResponse(
      result,
      function* (body) {
        const newState = getStateFromToken(defaultAuthState, body?.token);
        if (newState?.role === Role.INVALID) {
          yield event?.payload?.reject({
            message: "error.login.invalidCredentials",
          });
        } else {
          yield put(updateToken(body?.token));
          yield put(fetchBaseData());
          yield event?.payload?.resolve(body);
        }
      },
      function* (body: any) {
        yield event?.payload?.reject(body);
      },
      true
    );
  } catch (e) {
    event?.payload?.reject(e);
  }
}

function* doLogout() {
  try {
    yield put(removeToken());
  } catch (error) {
    console.log(error); // eslint-disable-line no-console
  }
}

function* profileFetcher(): Generator<any> {
  try {
    const result: any = yield call(profile);
    yield* handleResponse(
      result,
      function* (body) {
        yield put(updateProfile(body?.user));
      },
      function* () {
        throw new Error("Can't fetch Profile");
      },
      true
    );
  } catch (e) {
    console.log(e);
  }
}

export function* rootSaga(): SagaIterator<void> {
  yield takeEvery(APICALL, doApiCall as any);
  yield takeEvery(PAGINATED_APICALL, doPaginatedApiCall as any);
  yield takeEvery(LOGIN, doLogin);
  yield takeEvery(LOGOUT, doLogout);
  yield takeEvery(FETCH_BASE_DATA, doFetchBaseData);
  yield takeEvery(FETCH_PROFILE, profileFetcher);
}
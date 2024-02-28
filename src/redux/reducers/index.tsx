import { combineReducers, Reducer } from "redux";
import { connectRouter, RouterState } from "connected-react-router";
import { History } from "history";
import auth, { AuthState } from "./auth";
import { APICALL,STEP_FORM, SYSTEM_LOADER

  // Add more Action types here
} from '../actions';
import { MetaData , PagedEntity, getDefaultMetaData } from '../../models';
import { createBasicReducer ,createPagedReducer, createStepFormReducer} from './utils';
import { LoaderState, StepFormState } from "../../models/genericEntities";
export interface ReduxState {
  loader: any;
  router: RouterState;
  auth: AuthState;
  stepForm ?: StepFormState
    // Add more State here

}

const createRootReducer = (history: History): Reducer =>
  combineReducers<ReduxState>({
    /* Start Third party reducers */
    router: connectRouter(history),
    /* End Third party reducers */
    auth,
    loader: createBasicReducer<LoaderState>(SYSTEM_LOADER, {
      visibility: false,
    }),
    stepForm: createStepFormReducer(STEP_FORM, {
      currentPage: 0,
      forms: {},
      validationErrors: {},
    }),
      // Add more Reducers here
  });
export default createRootReducer;

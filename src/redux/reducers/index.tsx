import { combineReducers, Reducer } from "redux";
import { connectRouter, RouterState } from "connected-react-router";
import { History } from "history";
import auth, { AuthState } from "./auth";

import { APICALL,

  // Add more Action types here
} from '../actions';
import { MetaData , PagedEntity, getDefaultMetaData } from '../../models';
import { createBasicReducer ,createPagedReducer} from './utils';
export interface ReduxState {
  loader: any;
  router: RouterState;
  auth: AuthState;
    // Add more State here

}

const createRootReducer = (history: History): Reducer =>
  combineReducers<ReduxState>({
    /* Start Third party reducers */
    router: connectRouter(history),
    /* End Third party reducers */
    auth,
      // Add more Reducers here
      loader: (state = null) => state,
  });
export default createRootReducer;

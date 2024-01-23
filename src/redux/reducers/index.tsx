import { combineReducers, Reducer } from "redux";
import { connectRouter, RouterState } from "connected-react-router";
import { History } from "history";
import auth, { AuthState } from "./auth";

import { APICALL,

  // Add more Action types here
} from '../actions';

export interface ReduxState {
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
  });
export default createRootReducer;

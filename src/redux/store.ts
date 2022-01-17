import {
  applyMiddleware,
  combineReducers,
  createStore,
  Middleware,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { PublicationStateType } from "../types";

import { publicationsReducer } from "./reducers";

const middlewares: Middleware[] = [thunk];

export interface RootState {
  publications: PublicationStateType;
}

export const reducers = combineReducers({
  publications: publicationsReducer,
});

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

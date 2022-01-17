import {
  applyMiddleware,
  combineReducers,
  createStore,
  Middleware,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { PublicationStateType, CategoryStateType } from "../types";

import { publicationsReducer, categoriesReducer } from "./reducers";

const middlewares: Middleware[] = [thunk];

export interface RootState {
  publications: PublicationStateType;
  categories: CategoryStateType;
}

export const reducers = combineReducers({
  publications: publicationsReducer,
  categories: categoriesReducer,
});

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

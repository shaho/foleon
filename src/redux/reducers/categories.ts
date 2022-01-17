import { ActionWithPayload } from "../../types/action";
import { CategoryStateType } from "../../types/category";
import { ActionTypes } from "../actions";

const initialState: CategoryStateType = {
  list: [],
  loading: false,
  error: false,
};

export const categoriesReducer = (
  state = initialState,
  action: ActionWithPayload<ActionTypes, CategoryStateType>,
) => {
  switch (action.type) {
    case ActionTypes.GET_ALL_CATEGORIES_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.GET_ALL_CATEGORIES_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case ActionTypes.GET_ALL_CATEGORIES:
      return {
        ...state,
        ...action.payload,
        list: [{ key: "all", name: "All" }, ...(action.payload?.list || [])],
        error: false,
        loading: false,
      };
    default:
      return state;
  }
};

import { Dispatch } from "redux";

import { ActionTypes } from ".";
import { getAllCategories } from "../../services";

export const getAllCategoriesAction = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: ActionTypes.GET_ALL_CATEGORIES_LOADING,
      });

      const { data } = await getAllCategories();

      dispatch({
        type: ActionTypes.GET_ALL_CATEGORIES,
        payload: { list: data._embedded.category },
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.GET_ALL_CATEGORIES_ERROR,
        payload: [],
      });
    }
  };
};

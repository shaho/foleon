import { Dispatch } from "redux";

import { ActionTypes } from ".";
import {
  getAllPublications,
  getOnePublication,
  searchPublication,
} from "../../services";

export const getAllPublicationsAction = (
  page: number = 1,
  filter: string = "",
) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: ActionTypes.GET_ALL_PUBLICATIONS,
      });
      dispatch({
        type: ActionTypes.GET_ALL_PUBLICATIONS_LOADING,
      });

      const { data } = await getAllPublications({ page, filter });

      dispatch({
        type: ActionTypes.GET_ALL_PUBLICATIONS,
        payload: {
          list: data._embedded.edition,
          pageCount: data.page_size,
          currentPage: data.page,
          totalPages: data.total_items,
          filter: filter || "all",
        },
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.GET_ALL_PUBLICATIONS_ERROR,
        payload: [],
      });
    }
  };
};

export const getOnePublicationAction = (id: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: ActionTypes.GET_ONE_PUBLICATIONS,
      });
      dispatch({
        type: ActionTypes.GET_ONE_PUBLICATIONS_LOADING,
      });

      const { data } = await getOnePublication(id);

      dispatch({
        type: ActionTypes.GET_ONE_PUBLICATIONS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.GET_ONE_PUBLICATIONS_ERROR,
        payload: [],
      });
    }
  };
};

export const searchPublicationsAction = (input: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: ActionTypes.GET_ALL_PUBLICATIONS_LOADING,
      });

      const { data } = await searchPublication(input);

      dispatch({
        type: ActionTypes.GET_ALL_PUBLICATIONS,
        payload: {
          list: data._embedded.edition,
          pageCount: data.page_size,
          currentPage: data.page,
          totalPages: data.total_items,
          filter: "",
        },
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.GET_ALL_PUBLICATIONS_ERROR,
        payload: [],
      });
    }
  };
};

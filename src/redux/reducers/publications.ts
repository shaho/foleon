import { Publication, PublicationStateType } from "../../types";
import { ActionWithPayload } from "../../types/action";
import { ActionTypes } from "../actions";

const initialState: PublicationStateType = {
  list: [],
  selectedItem: {} as Publication,
  pageCount: 10,
  currentPage: 1,
  totalPages: 1,
  filter: "all",
  loading: false,
  error: false,
};

export const publicationsReducer = (
  state = initialState,
  action: ActionWithPayload<ActionTypes, PublicationStateType>,
) => {
  switch (action.type) {
    case ActionTypes.GET_ALL_PUBLICATIONS_LOADING:
    case ActionTypes.GET_ONE_PUBLICATIONS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.GET_ALL_PUBLICATIONS_ERROR:
    case ActionTypes.GET_ONE_PUBLICATIONS_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case ActionTypes.GET_ALL_PUBLICATIONS:
      return {
        ...state,
        ...action.payload,
        loading: false,
        error: false,
        page: 1,
        filter: action.payload?.filter,
      };
    case ActionTypes.GET_ONE_PUBLICATIONS:
      return {
        ...state,
        selectedItem: action.payload,
      };
    default:
      return state;
  }
};

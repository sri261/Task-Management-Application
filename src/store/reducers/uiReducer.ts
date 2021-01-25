import {
  UIState,
  MODAL,
  STORE_READY,
  SET_EMAIL,
  SET_CARD_ID,
  COMMENTS_LOADING,
} from "../types";
// import { UiAction } from "../actions/actions";
import { UiAction } from "../types";
const initialState: UIState = {
  show: false,
  fireDataLoaded: false,
  cardID: "",
  commentsLoading: true,
};

export const uiReducer = (state: UIState = initialState, action: UiAction) => {
  switch (action.type) {
    case MODAL:
      return { ...state, show: action.payload };
    case STORE_READY:
      return { ...state, fireDataLoaded: action.payload };
    case SET_EMAIL:
      return { ...state, email: action.payload };
    case SET_CARD_ID:
      return { ...state, cardID: action.payload };
    case COMMENTS_LOADING:
      return { ...state, commentsLoading: action.payload };
    default:
      return state;
  }
};

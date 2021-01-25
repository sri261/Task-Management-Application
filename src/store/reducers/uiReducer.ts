import { UIState, MODAL, STORE_READY, SET_EMAIL } from "../types";
import { UiAction } from "../actions/actions";

const initialState: UIState = {
  show: false,
  fireDataLoaded: false,
};

export const uiReducer = (state: UIState = initialState, action: UiAction) => {
  switch (action.type) {
    case MODAL:
      return { ...state, show: action.payload };
    case STORE_READY:
      return { ...state, fireDataLoaded: action.payload };
    case SET_EMAIL:
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

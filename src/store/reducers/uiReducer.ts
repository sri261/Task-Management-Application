import { UIState, ModalAction, MODAL, STORE_READY } from "../types";
import { UiAction } from "../actions/actions";

const initialState: UIState = {
  show: false,
  fireDataLoading: false,
};

export const uiReducer = (state: UIState = initialState, action: UiAction) => {
  switch (action.type) {
    case MODAL: {
      return { ...state, show: action.payload };
    }
    case STORE_READY:
      return { ...state, fireDataLoading: action.payload };
    default:
      return state;
  }
};

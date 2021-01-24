import { ModalState, ModalAction, MODAL } from "../types";

const initialState: ModalState = {
  show: false,
  id: "" /*<<<<<<<<<<<,------------------------ */,
};

// type Action = { type: "ADD_NOTE"; payload: string };
export const modalReducer = (
  state: ModalState = initialState,
  action: ModalAction
) => {
  switch (action.type) {
    case MODAL: {
      return { ...state, show: action.payload };
    }
    default:
      return state;
  }
};

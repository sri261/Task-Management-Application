export const MODAL = "MODAL";

export interface ModalState {
  show: boolean;
}

//actions
export interface ModalAction {
  type: typeof MODAL;
  payload: boolean;
}

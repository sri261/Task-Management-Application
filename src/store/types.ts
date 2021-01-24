export const MODAL = "MODAL";
export const FIRE_TO_STORE = typeof "FIRE_TO_STORE";

//Store
export interface Store {}

//Task
export interface Task {
  [id: string]: {
    caption: string | null;
    status: string | null;
    tag: string | null;
    timestamp: string | null;
  };
}

export interface ModalState {
  show: boolean;
  id: string;
}

export interface ModalAction {
  type: typeof MODAL;
  payload: boolean;
}

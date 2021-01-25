export const MODAL = "MODAL";
export const FIRE_TO_STORE = "FIRE_TO_STORE";
export const STORE_READY = "STORE_READY";
export const UPDATE_STORE = "UPDATE_STORE";
export const SET_EMAIL = "SET_EMAIL";
export const CURRENT_USER = "CURRENT_USER";
//Store
export interface Store {
  [id: string]: Task;
}

//Task
export interface Task {
  [id: string]: {
    caption: string | null;
    status: string | null;
    tag: string | null;
    timestamp: string | null;
  };
}

export interface UIState {
  show: boolean;
  fireDataLoaded: boolean;
}
export interface CurrentUserState {
  email: string;
}

export interface ModalAction {
  type: typeof MODAL;
  payload: boolean;
}

export const MODAL = "MODAL";
// export const FIRE_TO_STORE = typeof "FIRE_TO_STORE";
export const FIRE_TO_STORE = "FIRE_TO_STORE";
export const STORE_READY = "STORE_READY";

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
  fireDataLoading: boolean;
}

export interface ModalAction {
  type: typeof MODAL;
  payload: boolean;
}

import { ThunkAction } from "redux-thunk";

import { MODAL } from "../types";
import { firestoreDB } from "../../firebase/firebaseIndex";
import {
  FIRE_TO_STORE,
  Task,
  Store,
  STORE_READY,
  UPDATE_STORE,
} from "../types";
import { ReducerType } from "../reducers/Reducer";

// Fire Data To Store Action
export interface Get_Fire_Data_To_Store_Action {
  type: typeof FIRE_TO_STORE;
  payload: Store;
}
//Fire Data To Store Action Method
const fireDataToStoreActionMethod = (
  payload: Store
): Get_Fire_Data_To_Store_Action => {
  return {
    type: FIRE_TO_STORE,
    payload: payload,
  };
};

//Fire Data To Store Thunk Action Method
export const fireDataToStoreThunkActionMethod = (): ThunkAction<
  void,
  ReducerType,
  null,
  Get_Fire_Data_To_Store_Action
> => {
  return (dispatch: any) => {
    let tasks: Store = {};
    // const tasks: any = {};

    // console.log("Thunk Action Method Reached");
    firestoreDB.collection("card").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const data: Task = doc.data();
        tasks[doc.id] = data;
        // tasks = Object.assign(tasks, { [doc.id]: data });
      });

      dispatch(fireDataToStoreActionMethod(tasks));
      dispatch(StoreReadyActionMethod(true));
    });
  };
};

//Update Store Action
export interface Update_Store {
  type: typeof UPDATE_STORE;
  payload: Task;
}
//Update Store Action Method
export const updateStore = (payload: Task): Update_Store => {
  return { type: UPDATE_STORE, payload: payload };
};

//modal action
export interface ModalAction {
  type: typeof MODAL;
  payload: boolean;
}

//modal action method
export const changeModalActionMethod = (input: boolean): ModalAction => {
  return {
    type: MODAL,
    payload: input,
  };
};

//Store Ready Action
export interface StoreReadyAction {
  type: typeof STORE_READY;
  payload: boolean;
}
//Store Ready Action Method
export const StoreReadyActionMethod = (input: boolean): StoreReadyAction => {
  return {
    type: STORE_READY,
    payload: input,
  };
};

export type UiAction = ModalAction | StoreReadyAction;
export type ReducerAction = Update_Store | Get_Fire_Data_To_Store_Action;

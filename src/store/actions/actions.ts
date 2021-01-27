import { ThunkAction } from "redux-thunk";

import { MODAL, SET_CARD_ID, SET_EMAIL } from "../types";
import { firestoreDB } from "../../firebase/firebaseIndex";
import {
  FIRE_TO_STORE,
  Task,
  Store,
  STORE_READY,
  UPDATE_STORE,
  UPDATE_PIN,
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

    firestoreDB
      .collection("card")
      .orderBy("timestamp", "asc")
      .onSnapshot((querySnapshot) => {
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
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

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
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Set Email Action
export interface SetEmailAction {
  type: typeof SET_EMAIL;
  payload: string;
}
//Set Email Action Method
export const setEmailActionMethod = (payload: string): SetEmailAction => {
  return {
    type: SET_EMAIL,
    payload: payload,
  };
};
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Set CardId Action
export interface SetCardID {
  type: typeof SET_CARD_ID;
  payload: string;
}
//Set CardId Action Method
export const setCardIDActionMethod = (payload: string): SetCardID => {
  return {
    type: SET_CARD_ID,
    payload: payload,
  };
};
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++
//update pin Action
interface UpdatePinAction {
  type: typeof UPDATE_PIN;
  payload: [number, string];
}
//update pin Action Method
export const updatePinActionMethod = (
  input: number,
  cardID: string
): UpdatePinAction => {
  return {
    type: UPDATE_PIN,
    payload: [input, cardID],
  };
};

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

export type ReducerAction =
  | Update_Store
  | Get_Fire_Data_To_Store_Action
  | UpdatePinAction;

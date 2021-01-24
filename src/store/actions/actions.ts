import { ThunkAction } from "redux-thunk";

import { ModalAction, MODAL } from "../types";
import { firestoreDB } from "../../firebase/firebaseIndex";
import { FIRE_TO_STORE, Task } from "../types";
import { ReducerType } from "../reducers/Reducer";

// Fire Data To Store Action
export interface Get_Fire_Data_To_Store_Action {
  type: typeof FIRE_TO_STORE;
  payload: Task;
}
//Fire Data To Store Action Method
const fireDataToStoreActionMethod = (
  payload: Task
): Get_Fire_Data_To_Store_Action => {
  console.log("action method reached");
  return {
    type: FIRE_TO_STORE,
    payload: payload,
  };
};

//Fire Data To Store Thunk Action Method
let tasks: Task = {};
export const fireDataToStoreThunkActionMethod = (): ThunkAction<
  void,
  ReducerType,
  null,
  Get_Fire_Data_To_Store_Action
> => {
  return (dispatch: any) => {
    console.log("Thunk Action Method Reached");
    firestoreDB.collection("card").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        tasks = Object.assign(tasks, { [doc.id]: data });
      });
    });
    dispatch(fireDataToStoreActionMethod(tasks));
  };
};
//modal action method
export const changeModalActionMethod = (input: boolean): ModalAction => {
  return {
    type: MODAL,
    payload: input,
  };
};

import { firestoreDB } from "../firebase/firebaseIndex";
export const MODAL = "MODAL";
export const GET_FIRE_DATA = "GET_FIRE_DATA";
export const ADD_TASK_TO_STORE = "ADD_TASK_TO_STORE";
export const ADD_FIRE_TO_STORE = "ADD_FIRE_TO_STORE";

export interface ModalState {
  show: boolean;
}

export interface Card {
  caption: string;
  status: string;
  tag: string;
  time: string;
}
// export interface FirebaseDataState {
//   cards: {
//     [id: string]: Card;
//   };
// }

export interface FirebaseDataState {
  cards: {
    [id: string]: {
      caption: string;
      status: string;
      tag: string;
      time: string;
    };
  };
}

//actions

export interface ModalAction {
  type: typeof MODAL;
  payload: boolean;
}

//------- Add test task to store -------------
export interface AddTestTaskToStore {
  type: typeof ADD_TASK_TO_STORE;
  payload: {
    caption: string;
    status: string;
    tag: string;
    timestamp: string;
  };
}

export const addTestTaskToStoreActionMethod = (
  caption: string,
  status: string,
  tag: string,
  timestamp: string
): AddTestTaskToStore => {
  return {
    type: ADD_TASK_TO_STORE,
    payload: {
      caption: caption,
      status: status,
      tag: tag,
      timestamp: timestamp,
    },
  };
};

export interface AddToFireAction {
  type: typeof ADD_TASK_TO_STORE;
  payload: Card;
}
// ============================= Add Firebase Data To Store==================================
//action
export interface Task {
  caption: string;
  status: string;
  tag: string;
  timestamp: string;
}

export interface AddFireToStoreAction {
  type: typeof ADD_FIRE_TO_STORE;
  payload: Task;
  id: string;
}

// action method
export const addFireToStoreActionMethod = (
  payload: Task,
  id: string
): AddFireToStoreAction => {
  return {
    type: ADD_FIRE_TO_STORE,
    payload: payload,
    id: id,
  };
};

export const addFireToStoreActionMethodThunk = () => {
  //wait here for firebase data and then return payload to reducer
  return (dispatch: any) => {
    firestoreDB.collection("card").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const data: Task = {
          caption: doc.data().caption,
          status: doc.data().status,
          tag: doc.data().tag,
          timestamp: doc.data().timestamp,
        };
        const id = doc.id;

        dispatch(addFireToStoreActionMethod(data, doc.id));
      });
    });
  };
};

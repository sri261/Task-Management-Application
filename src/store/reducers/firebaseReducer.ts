import {
  FirebaseDataState,
  ADD_TASK_TO_STORE,
  AddToFireAction,
  ADD_FIRE_TO_STORE,
  AddFireToStoreAction,
} from "../types";

const initialState: FirebaseDataState = {
  cards: {
    "3434a": {
      caption: "test",
      status: "test",
      tag: "test",
      time: "test",
    },
    "7865a": {
      caption: "test2",
      status: "test",
      tag: "test",
      time: "test",
    },
  },
};

export const firebaseReducer = (
  state: FirebaseDataState = initialState,
  action: AddToFireAction
) => {
  switch (action.type) {
    case ADD_TASK_TO_STORE: {
      console.log("reducer reached STATE UPDATED");
      return {
        ...state,
        cards: { ...state.cards, "3434b": action.payload },
      };
    }
    default:
      return state;
  }
};
// ===============================================
interface StoreState {
  tasks: {
    [id: string]: {
      caption: string;
      status: string;
      tag: string;
      time: string;
    };
  };
}
const initialStoreState: StoreState = {
  tasks: {
    "7865a": {
      caption: "test2",
      status: "test",
      tag: "test",
      time: "test",
    },
  },
};
export const addFireToStoreReducer = (
  state: StoreState = initialStoreState,
  action: AddFireToStoreAction
) => {
  switch (action.type) {
    case ADD_FIRE_TO_STORE:
      console.log("reducer reached");
      return { ...state.tasks, [action.id]: action.payload };

    default:
      return state;
  }
};

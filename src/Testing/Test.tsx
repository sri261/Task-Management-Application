import { useSelector, useDispatch } from "react-redux";
import { ThunkAction } from "redux-thunk";

import { firestoreDB } from "../firebase/firebaseIndex";

const TEST = typeof "TEST";

interface Store {}

interface Task {
  [id: string]: {
    caption: string | null;
    status: string | null;
    tag: string | null;
    timestamp: string | null;
  };
}
//test action
interface TestAction {
  type: typeof TEST;
  payload: Task;
}

//initial state
const initialState: Store = {};

//test reducer
export const reducer = (state: Store = initialState, action: TestAction) => {
  switch (action.type) {
    case TEST:
      return { ...state, tasks: action.payload };
    default:
      return state;
  }
};
export type TestReducerState = ReturnType<typeof reducer>;
//action method
const testFnActionMethod = (payload: Task): TestAction => {
  console.log("action method reached");
  return {
    type: TEST,
    payload: payload,
  };
};

let tasks: Task = {};
//test Thunk Action Method
export const testFnThunkActionMethod = (): ThunkAction<
  void,
  TestReducerState,
  null,
  TestAction
> => {
  return (dispatch: any) => {
    console.log("Thunk Action Method Reached");
    firestoreDB.collection("card").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        tasks = Object.assign(tasks, { [doc.id]: data });
      });
    });
    dispatch(testFnActionMethod(tasks));
  };
};

function Test() {
  const reduxStore: any = useSelector<Task>((state) => state.tasks);
  const dispatch = useDispatch();
  const temp = () => {
    const keys = Object.keys(reduxStore);
    keys.map((key) => {
      console.log(key);
    });
  };
  return (
    <div>
      <button
        onClick={() => {
          console.log("Dispatch button Clicked");
          dispatch(testFnThunkActionMethod());
        }}
      >
        Dispatch
      </button>
      <button
        onClick={() => {
          temp();
        }}
      >
        Check Store
      </button>
    </div>
  );
}

export default Test;

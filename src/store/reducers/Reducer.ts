import { Store, FIRE_TO_STORE, UPDATE_STORE } from "../types";
import { ReducerAction } from "../actions/actions";
//Initial Store State
const initialState: Store = {};

//Reducer
export const Reducer = (state: Store = initialState, action: ReducerAction) => {
  switch (action.type) {
    case FIRE_TO_STORE:
      //   return { ...state, tasks: action.payload };
      return { ...state, ...action.payload };
    case UPDATE_STORE:
      const tempo = { ...state, ...action.payload };
      console.log(tempo, "tempo");
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export type ReducerType = ReturnType<typeof Reducer>;

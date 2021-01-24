import { Store, FIRE_TO_STORE } from "../types";
import { Get_Fire_Data_To_Store_Action } from "../actions/actions";

//Initial Store State
const initialState: Store = {};

//Reducer
export const Reducer = (
  state: Store = initialState,
  action: Get_Fire_Data_To_Store_Action
) => {
  switch (action.type) {
    case FIRE_TO_STORE:
      return { ...state, tasks: action.payload };

    default:
      return state;
  }
};

export type ReducerType = ReturnType<typeof Reducer>;

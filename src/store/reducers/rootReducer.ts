import React from "react";
interface temp {
  showModal: boolean;
}
const initialState: temp = {
  showModal: true,
};

function rootReducer(state = initialState, action: any): any {
  return state;
}

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

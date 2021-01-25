import React from "react";
import { CurrentUserState, CURRENT_USER } from "../types";
import { CurrentUserAction } from "../actions/currentUserActions";
const initialState: CurrentUserState = {
  email: "",
  // isLoggedIn: false,
};
export const currentUserReducer = (
  state: CurrentUserState = initialState,
  action: CurrentUserAction
) => {
  switch (action.type) {
    case CURRENT_USER:
      return { ...state, email: action.payload };

    default:
      return state;
  }
};

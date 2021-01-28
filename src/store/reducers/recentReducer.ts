import { RecentActivityActions } from "../actions/recentActions";
import { UPDATE_RECENT_STORE, RECENT_ACTIVITY_TO_STORE } from "../types";

const initialState: any = [];

export const recentReducer = (
  state = initialState,
  actions: RecentActivityActions
) => {
  switch (actions.type) {
    case UPDATE_RECENT_STORE:
      console.log("success");
      return [...state, ...actions.payload];
    case RECENT_ACTIVITY_TO_STORE:
      console.log("RECENT_ACTIVITY_TO_STORE");
      return [...[actions.payload], ...state];

    default:
      return state;
  }
};

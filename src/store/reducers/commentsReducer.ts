import { Get_Comments_From_Firestore } from "../actions/commentsAction";
import { GET_COMMENTS_FIRESTORE } from "../types";
const initialState: any = [];

export const commentsReducer = (
  state: any = initialState,
  action: Get_Comments_From_Firestore
) => {
  switch (action.type) {
    case GET_COMMENTS_FIRESTORE:
      //   return [...state, ...action.payload];
      return (state[1] = action.payload);
    default:
      return state;
  }
};

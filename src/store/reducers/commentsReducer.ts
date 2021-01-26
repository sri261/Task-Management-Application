import { CommentsAction } from "../actions/commentsAction";
import { GET_COMMENTS_FIRESTORE, EMPTY_REDUX_STORE_COMMENTS } from "../types";
const initialState: any = [];

export const commentsReducer = (
  state: any = initialState,
  action: CommentsAction
) => {
  switch (action.type) {
    case GET_COMMENTS_FIRESTORE:
      return (state[0] = action.payload);
    case EMPTY_REDUX_STORE_COMMENTS:
      return (state[0] = []);
    default:
      return state;
  }
};

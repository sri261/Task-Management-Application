import { COMMENTS_LOADING } from "../types";

//Comments Loading Action
export interface CommentsLoading {
  type: typeof COMMENTS_LOADING;
  payload: boolean;
}

//Comments Loading Action Method
export const commentsLoadingActionMethod = (
  payload: boolean
): CommentsLoading => {
  return {
    type: COMMENTS_LOADING,
    payload: payload,
  };
};

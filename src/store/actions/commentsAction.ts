import { GET_COMMENTS_FIRESTORE, EMPTY_REDUX_STORE_COMMENTS } from "../types";
import { firestoreDB } from "../../firebase/firebaseIndex";
import { commentsLoadingActionMethod } from "../../store/actions/CommentLoadingAction";

// =========================================================

//Action To Get Comments from firestore
export interface Get_Comments_From_Firestore {
  type: typeof GET_COMMENTS_FIRESTORE;
  payload: any;
}

//Action Method To Get Comments from firestore
export const getCommentsFromFirestoreActionMethod = (
  payload: any
): Get_Comments_From_Firestore => {
  return { type: GET_COMMENTS_FIRESTORE, payload: payload };
};

//Thunk Action  To Get Comments from firestore
export const getCommentsFromFirestoreThunkAction = (id: string) => {
  return (dispatch: any) => {
    const commentsArr: Array<any> = [];
    firestoreDB
      .collection("card")
      .doc(id)
      .collection("Comments")
      .orderBy("timestamp", "asc")
      .get()
      .then((doc) => {
        doc.forEach((item) => {
          commentsArr.push([
            item.id,
            item.data().comment,
            item.data().user,
            item.data().timestamp,
            item.data().name,
          ]);
        });
        dispatch(getCommentsFromFirestoreActionMethod(commentsArr));
        dispatch(commentsLoadingActionMethod(false));
      })
      .catch((error) => {
        console.log("error getting document", error);
      });
  };
};

// =========================================================
//Action to Empty Comments Store
interface EmptyCommentsStore {
  type: typeof EMPTY_REDUX_STORE_COMMENTS;
}
//Action Method to Empty Comments Store
export const emptyCommentsStoreActionMethod = (): EmptyCommentsStore => {
  return {
    type: EMPTY_REDUX_STORE_COMMENTS,
  };
};
// =========================================================

//Comments Action Type
export type CommentsAction = Get_Comments_From_Firestore | EmptyCommentsStore;

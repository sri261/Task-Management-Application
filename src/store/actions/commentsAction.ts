//set comments
//=>onSumbit dispatch thunk Action to send comments to
//  firestore and update redux store
// ---------------------
//onSubmit => dispatch(ThunkAction-to firestore) => dispatch(new Comment to store)
// --------------------------
//get comments
//=> onClick comment icon in CardComponent
//=> dispatch Thunk action to  get comments from firestore to redux store
//-- set some loading ,after thunk action complete dispatch action to send
//    comments to redux store
//=> render the comments from redux store data
//Comments
import { GET_COMMENTS_FIRESTORE } from "../types";
import { firestoreDB } from "../../firebase/firebaseIndex";
import { commentsLoadingActionMethod } from "../../store/actions/CommentLoadingAction";
export interface Comments {
  [id: string]: Comment;
}

//Comment
export interface Comment {
  email: string;
  comment: string;
}

export const setCommentsFromFirestoreThunkAction = (comment: string) => {
  //   return (dispatch: any) => {
  //     firestoreDB
  //       .collection("card")
  //       .doc(cardId)
  //       .collection("Comments")
  //       .doc()
  //       .set({ comment: comment })
  //       .then(() => {
  //         console.log("comment added to firestore");
  //       });
  //   };
};

//Action To Get Comments from firestore
export interface Get_Comments_From_Firestore {
  type: typeof GET_COMMENTS_FIRESTORE;
  payload: any;
}
export const getCommentsFromFirestoreActionMethod = (
  payload: any
): Get_Comments_From_Firestore => {
  return { type: GET_COMMENTS_FIRESTORE, payload: payload };
};

//Thunk Action Method To Get Comments from firestore
export const getCommentsFromFirestoreThunkAction = (id: string) => {
  return (dispatch: any) => {
    const commentsArr: Array<any> = [];
    firestoreDB
      .collection("card")
      .doc(id)
      .collection("Comments")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((item) => {
          commentsArr.push([item.id, item.data().comment]);
        });
        dispatch(getCommentsFromFirestoreActionMethod(commentsArr));
        dispatch(commentsLoadingActionMethod(false));
      });
  };
};

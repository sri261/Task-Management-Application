import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";

import "./CommentsModal.css";
import { UIState } from "../../../store/types";
import { firestoreDB } from "../../../firebase/firebaseIndex";
import { setCardIDActionMethod } from "../../../store/actions/actions";

function CommentsModal() {
  const commentModalState = useSelector<UIState>((state) => state.show);
  const cardId: any = useSelector<any>((state) => state.uiReducer.cardID);
  const loading: any = useSelector<any>(
    (state) => state.uiReducer.commentsLoading
  );
  console.log(loading, "loading");

  const commentsFromStore: any = useSelector<any>(
    (state) => state.commentsReducer
  );

  // console.log(commentsFromStore, "comments");
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const handleCommentSubmit = (e: any) => {
    e.preventDefault();
    console.log(comment);
    console.log(cardId);

    // dispatch(setCardIDActionMethod(comment));
    firestoreDB
      .collection("card")
      .doc(cardId)
      .collection("Comments")
      .doc()
      .set({ comment: comment })
      .then(() => {
        console.log("comment added to firestore");
      });
  };
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

  return (
    <div>
      <div className="comment-modal">
        {/* ================= Top Bar============================ */}
        <div className="comment-modal-top-bar">
          <div className="comment-modal-heading">Comments</div>
          <div
            className="comment-modal-top-bar-icon"
            onClick={() => {
              dispatch({ type: "MODAL", payload: false });
            }}
          >
            <AiOutlineClose />
          </div>
        </div>
        {/* ================= Display Comments Section============================ */}

        {loading ? (
          <h5>Loading...</h5>
        ) : (
          <ul>
            {commentsFromStore.map((i: any) => {
              console.log(i[1]);
              return <li>{i[1]}</li>;
            })}
          </ul>
        )}

        {/* // <ul>
            //   {commentsFromStore.map((i: any) => 
            //     console.log(i, "i");
            //     return <i>{i[1]}</i>;
            //   })}
            // </ul>
          // <p className="display-comments"></p> */}

        {/* ================= Add Comments Section============================ */}

        <div className="comment-modal-comment-section">
          <form onSubmit={handleCommentSubmit}>
            <textarea
              onChange={(e: any) => {
                setComment(e.target.value);
              }}
            ></textarea>
            {/* <input
              type="text"
              onChange={(e: any) => {
                setComment(e.target.value);
              }}
            /> */}
            <button type="submit">Done</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CommentsModal;

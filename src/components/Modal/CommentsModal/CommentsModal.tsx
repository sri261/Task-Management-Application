import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdSend } from "react-icons/io";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/functions";
import { auth } from "../../../firebase/firebaseIndex";
import "./CommentsModal.css";
import { UIState } from "../../../store/types";
import { firestoreDB } from "../../../firebase/firebaseIndex";
// import { setCardIDActionMethod } from "../../../store/actions/actions";
import {
  emptyCommentsStoreActionMethod,
  getCommentsFromFirestoreThunkAction,
} from "../../../store/actions/commentsAction";
import {
  recentActivityToStoreActionMethod,
  addRecentActivityToFireMethod,
} from "../../../store/actions/recentActions";
import Comment from "../CommentsModal/Comment/Comment";

function CommentsModal() {
  const commentModalState = useSelector<UIState>((state) => state.show);
  const cardId: any = useSelector<any>((state) => state.uiReducer.cardID);
  const commentsFromStore: any = useSelector<any>(
    (state) => state.commentsReducer
  );
  const [loading, setLoading] = useState(Boolean);
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  const handleCommentSubmit = (e: any) => {
    e.preventDefault();
    const user = auth().currentUser?.email;
    const name = auth().currentUser?.displayName;

    const timestamp = new Date().toISOString();
    dispatch(recentActivityToStoreActionMethod("comment", user));
    addRecentActivityToFireMethod("comment", user);
    console.log(user, "user");
    firestoreDB
      .collection("card")
      .doc(cardId)
      .collection("Comments")
      .doc()
      .set({ comment: comment, user: user, timestamp: timestamp, name: name })
      .then(() => {
        console.log("comment added to firestore");
        dispatch(getCommentsFromFirestoreThunkAction(cardId));
        firestoreDB
          .collection("card")
          .doc(cardId)
          .update({ commentCount: firebase.firestore.FieldValue.increment(1) });
      });
  };

  useEffect(() => {
    commentsFromStore === [] ? setLoading(true) : setLoading(false);
  }, [loading]);

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
              dispatch(emptyCommentsStoreActionMethod());
            }}
          >
            <AiOutlineClose />
          </div>
        </div>
        {/* ================= Display Comments Section============================ */}
        {/* {loading ? ( */}
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="comments-display">
            {commentsFromStore.map((item: any) => {
              const date = new Date(item[3]).toISOString();
              return (
                <Comment
                  key={item[0]}
                  name={item[4]}
                  comment={item[1]}
                  user={item[2]}
                  timestamp={date}
                />
              );
            })}
          </div>
        )}

        {/* ================= Add Comments Section============================ */}

        <div className="comment-modal-comment-section">
          <form onSubmit={handleCommentSubmit}>
            <textarea
              onChange={(e: any) => {
                setComment(e.target.value);
              }}
            ></textarea>

            <button type="submit">
              <IoMdSend />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CommentsModal;

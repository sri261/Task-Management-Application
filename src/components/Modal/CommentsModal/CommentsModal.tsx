import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";

import "./CommentsModal.css";
import { UIState } from "../../../store/types";
import { firestoreDB } from "../../../firebase/firebaseIndex";
import { setCardIDActionMethod } from "../../../store/actions/actions";
import { emptyCommentsStoreActionMethod } from "../../../store/actions/commentsAction";

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
          <div>
            <ul>
              {commentsFromStore.map((item: any) => {
                console.log(item[1]);
                return <li key={item[0]}>{item[1]}</li>;
              })}
            </ul>
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

            <button type="submit">Done</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CommentsModal;

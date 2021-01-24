import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";

import "./CommentsModal.css";
import { UIState } from "../../../store/types";

function CommentsModal() {
  const commentModalState = useSelector<UIState>((state) => state.show);
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const handleCommentSubmit = (e: any) => {
    e.preventDefault();
    console.log(comment);
  };

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
        <div>
          <p className="display-comments">jsnbkjnsdkndkndknskdn</p>
        </div>
        {/* ================= Add Comments Section============================ */}

        <div className="comment-modal-comment-section">
          <form onSubmit={handleCommentSubmit}>
            <input
              type="text"
              onChange={(e: any) => {
                setComment(e.target.value);
              }}
            />
            <button type="submit">Done</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CommentsModal;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";

import "./CommentsModal.css";
import { ModalState } from "../../../store/types";

function CommentsModal() {
  const commentModalState = useSelector<ModalState>((state) => state.show);
  const dispatch = useDispatch();

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
        {/* ================= Comments Section============================ */}
        <div className="comment-modal-comment-section">comments</div>
      </div>
    </div>
  );
}

export default CommentsModal;

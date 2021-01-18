import React from "react";

import { AiOutlineClose } from "react-icons/ai";

import "./CommentsModal.css";

function CommentsModal() {
  return (
    <div>
      <div className="comment-modal">
        {/* ================= Top Bar============================ */}
        <div className="comment-modal-top-bar">
          <div className="comment-modal-heading">Comments</div>
          {/* <div>
            <AiOutlineClose />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default CommentsModal;

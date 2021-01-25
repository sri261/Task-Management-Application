import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";

import "./Modal.css";
import { UIState } from "../../store/types";
import CommentsModal from "../Modal/CommentsModal/CommentsModal";

function Modal() {
  const dispatch = useDispatch();
  return (
    <div className="modal">
      {/* <button
        onClick={() => {
          dispatch({ type: "MODAL", payload: true });
          console.log(modalState);
        }}
      >
        TEST MODAL STATE{" "}
      </button> */}

      <div
        className="close-modal-icon"
        onClick={() => {
          dispatch({ type: "MODAL", payload: true });
        }}
      >
        <AiOutlineClose />
      </div>
      <div className="modal-input">
        <CommentsModal />
      </div>
    </div>
  );
}

export default Modal;

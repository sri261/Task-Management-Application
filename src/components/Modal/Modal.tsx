import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";

import "./Modal.css";
import { ModalState } from "../../store/types";
import CommentsModal from "../Modal/CommentsModal/CommentsModal";

function Modal() {
  const modalState = useSelector<ModalState>((state) => state.show);
  const dispatch = useDispatch();
  console.log(modalState);
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
          console.log(modalState);
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

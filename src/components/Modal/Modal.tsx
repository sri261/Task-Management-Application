import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";

import { AiOutlineClose } from "react-icons/ai";

import { ProjectContext } from "../ProjectComponent/ProjectComponent";
import "./Modal.css";
import CommentsModal from "../Modal/CommentsModal/CommentsModal";

function Modal() {
  const { showModal, setShowModal } = useContext(ProjectContext);
  // const counter: any = useSelector((state) => state);
  // const dispatch = useDispatch();

  return (
    <div className="modal">
      <div
        className="close-modal-icon"
        onClick={() => {
          setShowModal(false);
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

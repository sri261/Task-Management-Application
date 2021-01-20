import React, { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaCommentAlt } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlinePaperClip, AiFillFlag } from "react-icons/ai";

import "./CardComponent.css";
import "./CaptionComponent/CaptionComponent";
import Tag from "../Tag/Tag";
import { ModalState } from "../../../store/types";
import { changeModalActionMethod } from "../../../store/actions/actions";

function CardComponent(props: any) {
  const modalState = useSelector<ModalState>((state) => state.show);
  const dispatch = useDispatch();
  const [pincount, setPincount]: any = useState(0);
  const [editCaption, setEditCaption] = useState(false);
  const [cardID, setCardID] = useState();

  const pinClickHandler = () => {
    setPincount(pincount + 1);
  };

  const editCaptionFn = () => {
    if (editCaption) {
      setEditCaption(false);
    } else if (editCaption === false) {
      setEditCaption(true);
    }
  };

  useEffect(() => {
    setCardID(props.id);
  }, []);
  return (
    <>
      <div className="card-component" draggable>
        {/* ================= Top Bar============================ */}
        <div className="card-top-bar">
          {/* ==== Tag Component===== */}
          <Tag tag={props.tag} />
          {/* ==== Info Dots Icon ===== */}
          <div>
            <BsThreeDots />
          </div>
        </div>
        {/* ================= Caption Section============================ */}
        <div onClick={editCaptionFn}>
          {editCaption ? (
            <div>
              <input></input>
              <button>Done</button>
            </div>
          ) : (
            <div>
              <p>{props.caption} </p>
            </div>
          )}
        </div>
        {/* ================= Bottom Icon Bar============================ */}
        <div className="icons-bar">
          {/* ====Timestamp icon===== */}
          <div className="icon">
            <AiFillFlag />
            <span className="icon-info">12 Jan</span>
          </div>
          {/* ====Comment icon===== */}
          <div
            className="icon comment-icon"
            onClick={() => {
              dispatch(changeModalActionMethod(true));
            }}
          >
            <FaCommentAlt />
            <span className="icon-info">4</span>
          </div>
          {/* ====Pins icon===== */}
          <div className="icon" onClick={pinClickHandler}>
            <AiOutlinePaperClip className="icon" />
            <span className="icon-info">{pincount}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardComponent;

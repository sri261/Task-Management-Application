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
import ProfilePic from "../../../images/profile-pic.jpg";

// REVIEW: Stay away from any
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
  const tempFn = () => {
    return props.caption;
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
        <div>
          {editCaption ? (
            <div>
              {editCaption ? (
                <form onSubmit={editCaptionFn}>
                  <input
                    className="card-component-caption-input"
                    // value={props.caption}
                    value={tempFn()}
                    // onChange={(e) => {
                    //   tempFn(e.target.value);
                    // }}
                  />

                  {/* <button type="submit" onClick={editCaptionFn}> */}
                  <button type="submit">Done</button>
                </form>
              ) : null}
            </div>
          ) : (
            <div onClick={editCaptionFn}>
              <p>{props.caption} </p>
            </div>
          )}
        </div>
        {/* ================= Bottom Icon Bar============================ */}
        <div className="bottom-bar">
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
          {/* <div className="profile-pic">
            <img src={ProfilePic} alt="" />
          </div> */}
        </div>
      </div>
    </>
  );
}

export default CardComponent;

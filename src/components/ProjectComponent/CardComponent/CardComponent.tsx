import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaCommentAlt } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlinePaperClip, AiFillFlag } from "react-icons/ai";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";

import "./CardComponent.css";
import "./CaptionComponent/CaptionComponent";
import Tag from "../Tag/Tag";
import { UIState } from "../../../store/types";
import {
  changeModalActionMethod,
  setCardIDActionMethod,
} from "../../../store/actions/actions";
import { getCommentsFromFirestoreThunkAction } from "../../../store/actions/commentsAction";
import { updatePinActionMethod } from "../../../store/actions/actions";

// REVIEW: Stay away from any
function CardComponent(props: any) {
  const modalState = useSelector<UIState>((state) => state.show);
  const dispatch = useDispatch();
  const [pincount, setPincount]: any = useState(0);
  const [editCaption, setEditCaption] = useState(false);
  const [cardID, setCardID] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);
  const pinClickHandler = () => {
    setPincount(pincount + 1);
    dispatch(updatePinActionMethod(2, cardID));
  };
  const dateFn = () => {
    const monthsArray = [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    const date = new Date(props.timestamp);
    const month = monthsArray[date.getMonth()];
    return `${date.getDate()} ${month}`;
  };
  const date = new Date(props.timestamp);
  const toolTipDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
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
                    value={tempFn()}
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
            <Tippy content={toolTipDate}>
              <div className="icon">
                <AiFillFlag />
                <span className="icon-info">{dateFn()}</span>
              </div>
            </Tippy>

            {/* ====Comment icon===== */}
            <Tippy content="sample">
              <div
                className="icon comment-icon"
                onMouseOver={() => {
                  setShowTooltip(true);
                }}
                onClick={() => {
                  dispatch(changeModalActionMethod(true));
                  dispatch(setCardIDActionMethod(cardID));
                  dispatch(getCommentsFromFirestoreThunkAction(cardID));
                }}
              >
                <FaCommentAlt />
                <span className="icon-info">{props.commentCount}</span>
              </div>
            </Tippy>

            {/* ====Pins icon===== */}
            <div className="icon" onClick={pinClickHandler}>
              <AiOutlinePaperClip className="icon" />
              <span className="icon-info">{props.pins}</span>
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

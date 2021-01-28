import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaCommentAlt } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlinePaperClip, AiFillFlag } from "react-icons/ai";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";
import Dropdown from "rc-dropdown";
import Menu, { Item as MenuItem } from "rc-menu";
import "rc-dropdown/assets/index.css";
import TextareaAutosize from "react-textarea-autosize";
import { IoMdSend } from "react-icons/io";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/functions";
import { auth } from "../../../firebase/firebaseIndex";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

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
import { firestoreDB } from "../../../firebase/firebaseIndex";
import {
  recentActivityToStoreActionMethod,
  addRecentActivityToFireMethod,
} from "../../../store/actions/recentActions";

// REVIEW: Stay away from any
//------check card component number of renders
function CardComponent(props: any) {
  const modalState = useSelector<UIState>((state) => state.show);
  const tagColors: any = useSelector<any>((state) => state.uiReducer.tags);
  const tagLoading: any = useSelector<any>(
    (state) => state.uiReducer.tagsLoading
  );
  const PropsTag = props.tag;
  let bgProp, colorProp;

  const menu = (
    <Menu style={{ width: 140 }} multiple>
      <MenuItem
        key="1"
        onClick={() => {
          editCaptionFn();
        }}
      >
        Edit
      </MenuItem>

      <MenuItem key="2">Archive</MenuItem>
      <MenuItem disabled></MenuItem>
    </Menu>
  );
  const temp = () => {
    if (!tagLoading) {
      const tagEntries = Object.entries(tagColors);
      tagEntries.forEach((item: any) => {
        if (item[0] == PropsTag) {
          bgProp = item[1].background;
          colorProp = item[1].color;
        }
      });
    }
  };
  temp();

  const dispatch = useDispatch();
  const [pincount, setPincount]: any = useState(0);
  const [editCaption, setEditCaption] = useState(false);
  const [cardID, setCardID] = useState("");
  const [newCaption, setNewCaption] = useState("");

  const pinClickHandler = () => {
    setPincount(pincount + 1);
    dispatch(updatePinActionMethod(2, cardID));
  };
  //--------------Fix this
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
    const user: any = auth().currentUser?.displayName;

    if (editCaption) {
      const dateTodb = new Date().toISOString();
      firestoreDB
        .collection("card")
        // .doc(caption)
        .doc(cardID)
        .update({
          caption: newCaption,
          timestamp: dateTodb,
          // status: status,
          // tag: tag,
          // commentCount: 0,
          // pins: 0,
        })
        .then(() => {
          console.log("added to firestoreDB");
          dispatch(recentActivityToStoreActionMethod("Edited a task", user));
          addRecentActivityToFireMethod("Edited a task", user);
        })
        .catch((error) => {
          console.log("Error adding to firestoreDB", error);
        });
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
          {tagLoading ? (
            <div>Loading</div>
          ) : (
            <Tag tag={props.tag} background={bgProp} color={colorProp} />
          )}

          {/* ==== Info Dots Icon ===== */}
          <div className="info-dots">
            <Dropdown
              trigger={["click"]}
              //  onVisibleChange={this.onVisibleChange}
              //  visible={this.state.visible}
              //  closeOnSelect={false}
              overlay={menu}
              animation="slide-up"
            >
              <BsThreeDots />
            </Dropdown>
          </div>
        </div>
        {/* ================= Caption Section============================ */}
        <div>
          {editCaption ? (
            <div>
              {editCaption ? (
                <div className="card-form">
                  <form onSubmit={editCaptionFn}>
                    <div className="card-textarea">
                      <TextareaAutosize
                        autoFocus
                        defaultValue={props.caption}
                        onChange={(e) => {
                          setNewCaption(e.target.value);
                        }}
                      />
                    </div>
                    <button type="submit">
                      <IoMdSend />
                    </button>
                  </form>
                </div>
              ) : null}
            </div>
          ) : (
            <div className="card-caption">
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

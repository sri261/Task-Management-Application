import React, { useState, useEffect, useContext } from "react";

import { FaCommentAlt } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlinePaperClip, AiFillFlag } from "react-icons/ai";

import "./CardComponent.css";
import "./CaptionComponent/CaptionComponent";
import Tag from "../Tag/Tag";
import { ProjectContext } from "../ProjectComponent";

function CardComponent(props: any) {
  const [pincount, setPincount]: any = useState(0);
  const [editCaption, setEditCaption] = useState(false);
  const [cardID, setCardID] = useState();
  const { showModal, setShowModal } = useContext(ProjectContext);

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
            <div>Edit</div>
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
              setShowModal(true);
              console.log("Comment Clicked");
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

  // return (
  //   <>
  //     <div className="card-component">
  //       <div className="card-top-bar">
  //         <Tag tag={props.tag} />
  //         <div>
  //           <BsThreeDots />
  //         </div>
  //       </div>
  //       <p>{props.caption} </p>
  //       <div className="icons-bar">
  //         <a className="icon" href="">
  //           <AiFillFlag />
  //           <span className="icon-info">12 Jan</span>
  //         </a>
  //         <a className="icon" href="">
  //           <FaCommentAlt />
  //           <span className="icon-info">4</span>
  //         </a>
  //         <a className="icon" href="">
  //           <AiOutlinePaperClip className="icon" />
  //           <span className="icon-info">2</span>
  //         </a>
  //       </div>
  //     </div>
  //   </>
  // );
}

export default CardComponent;

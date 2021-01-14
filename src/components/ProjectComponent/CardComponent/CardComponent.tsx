import React, { useState } from "react";
import "./CardComponent.css";
import "./CaptionComponent/CaptionComponent";
import { FaCommentAlt } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlinePaperClip, AiFillFlag } from "react-icons/ai";
import Tag from "../Tag/Tag";

function CardComponent(props: any) {
  const [pincount, setPincount]: any = useState(0);
  const pinClickHandler = () => {
    setPincount(pincount + 1);
  };
  return (
    <>
      <div className="card-component" draggable>
        <div className="card-top-bar">
          <Tag tag={props.tag} />
          <div>
            <BsThreeDots />
          </div>
        </div>
        <p>{props.caption} </p>
        <div className="icons-bar">
          <div className="icon">
            <AiFillFlag />
            {/* <span className="icon-info">{props.timestamp}</span> */}
            <span className="icon-info">12 Jan</span>
          </div>
          <div className="icon">
            <FaCommentAlt />
            <span className="icon-info">4</span>
          </div>
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

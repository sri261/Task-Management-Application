import React, { useState } from "react";
import "./CardComponent.css";
import "./CaptionComponent/CaptionComponent";
import { FaCommentAlt } from "react-icons/fa";
import { AiOutlinePaperClip, AiFillFlag } from "react-icons/ai";
import Tag from "../Tag/Tag";

function CardComponent(props: any) {
  return (
    <>
      {/* <div className="card-component">
        <CaptionComponent />
        {addCard != 1 ? <button onClick={handleClick}>Add Card</button> : null}
      </div>
      {addCard === 1 ? <CardComponent /> : null} */}

      <div className="card-component">
        <div className="card-top-bar">
          <Tag tag={props.tag} />
          <div>...</div>
        </div>
        <p>{props.caption} </p>
        <div className="icons-bar">
          <a className="icon" href="">
            <AiFillFlag />
            <span className="icon-info">12 Jan</span>
          </a>
          <a className="icon" href="">
            <FaCommentAlt />
            <span className="icon-info">4</span>
          </a>
          <a className="icon" href="">
            <AiOutlinePaperClip className="icon" />
            <span className="icon-info">2</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default CardComponent;

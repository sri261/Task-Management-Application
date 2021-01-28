import React from "react";
import "./Comment.css";
import { CgProfile } from "react-icons/cg";
import { AiFillClockCircle } from "react-icons/ai";

function Comment(props: any) {
  // const timestamp = new Date(props.timestamp);
  const date = new Date(props.timestamp);
  const timestamp = date.toLocaleTimeString("en-US", {
    weekday: "long",
    // year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div className="com-single">
      {/* ---------------------------------- */}
      <div className="com-profile">
        <CgProfile />
      </div>
      {/* ---------------------------------- */}
      <div className="com-info">
        <div className="com-name"> {props.name}</div>{" "}
        <div className="com-timestamp">
          <div className="com-timestamp-clock-icon">
            <AiFillClockCircle />
          </div>
          <div className="com-timestamp-time">{timestamp}</div>
        </div>
        <div className="com-comment">{props.comment}</div>
      </div>
      {/* ---------------------------------- */}
    </div>
  );
}

export default Comment;

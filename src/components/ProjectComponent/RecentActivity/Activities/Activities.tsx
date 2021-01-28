import React from "react";
import { FaCommentAlt } from "react-icons/fa";

import "./Activities.css";
import ActivityIcon from "../ActivityIcon/ActivityIcon";

function Activities(props: any) {
  const date = new Date(props.timestamp);
  const timestamp = date.toLocaleDateString("en-US", {
    // weekday: "long",
    // year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="act">
      {/* -----------icon-------------------- */}
      <div>
        <ActivityIcon typeOfActivity={props.typeOfActivity} />
      </div>
      {/* -----------info-------------------- */}
      <div className="act-info">
        <div className="act-act">
          {/* ----------------name--------------- */}
          <div className="act-user">{props.name}</div>
          {/* ----------------added a--------------- */}
          <div> &nbsp; added a &nbsp;</div>
        </div>{" "}
        {/* ----------------activity--------------- */}
        <div>{props.typeOfActivity}</div>
        {/* ----------------timestamp--------------- */}
        <div className="act-date">{timestamp}</div>
      </div>
    </div>
  );
}

export default Activities;

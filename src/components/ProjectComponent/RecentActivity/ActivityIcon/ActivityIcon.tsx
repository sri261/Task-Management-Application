import React from "react";
import { FaCommentAlt } from "react-icons/fa";
import { BiTask } from "react-icons/bi";
import { RiTaskFill } from "react-icons/ri";

// RiTaskFill;
import "./ActivityIcon.css";

function ActivityIcon(props: any) {
  const iconType = () => {
    if (props.typeOfActivity === "comment") {
      return (
        <div className="activity_icon">
          <FaCommentAlt />
        </div>
      );
    } else if (props.typeOfActivity === "card") {
      return (
        <div className="activity_icon_task">
          <RiTaskFill />
        </div>
      );
    }
  };
  return <div>{iconType()}</div>;
}

export default ActivityIcon;

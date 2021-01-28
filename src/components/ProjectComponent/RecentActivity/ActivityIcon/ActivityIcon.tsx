import React from "react";
import { FaCommentAlt } from "react-icons/fa";
import { RiTaskFill } from "react-icons/ri";
import { MdModeEdit } from "react-icons/md";

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
    } else if (props.typeOfActivity === "Edited a task") {
      return (
        <div className="activity_icon_edit_task">
          <MdModeEdit />
        </div>
      );
    }
  };
  return <div>{iconType()}</div>;
}

export default ActivityIcon;

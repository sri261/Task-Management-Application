import React from "react";
import "./Tag.css";

function Tag(props: any) {
  const assignColor = () => {
    if (props.tag === "Code") {
      return {
        background: "pink",
        color: "rgb(231, 0, 39)",
      };
    } else if (props.tag === "UI Design") {
      return {
        background: "#bce2f4",
        color: "#3789b7",
      };
    } else if (props.tag === "Illustration") {
      return {
        background: "#d3ebe3",
        color: "#258555",
      };
    } else {
      return {
        background: "#f3dbf3",
        color: "#a136b1",
      };
    }
  };

  return (
    <div className="tag" style={assignColor()}>
      <h5>{props.tag}</h5>
    </div>
  );
}
export default Tag;

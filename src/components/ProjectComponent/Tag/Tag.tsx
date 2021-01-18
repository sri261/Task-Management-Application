import React from "react";
import "./Tag.css";

function Tag(props: any) {
  const assignColor = () => {
    if (props.tag === "Code") {
      return {
        background: "#fabfc9",
        color: "Red",
      };
    } else if (props.tag === "UI Design") {
      return {
        background: "#bce2f4",
        color: "rgb(33 119 168)",
      };
    } else if (props.tag === "Illustration") {
      return {
        background: "#d3ebe3",
        color: "rgb(21 123 72)",
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

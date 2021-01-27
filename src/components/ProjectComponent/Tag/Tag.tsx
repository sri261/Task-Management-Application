import React from "react";
import "./Tag.css";

function Tag(props: any) {
  const style = {
    background: props.background,
    color: props.color,
  };

  return (
    <div className="tag" style={style}>
      <h5>{props.tag}</h5>
    </div>
  );
}
export default Tag;

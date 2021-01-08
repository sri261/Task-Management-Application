import React from "react";
import "./CardComponent.css";
import "./CaptionComponent/CaptionComponent";
import CaptionComponent from "./CaptionComponent/CaptionComponent";

function CardComponent() {
  return (
    <div className="card-component">
      Card
      <CaptionComponent />
    </div>
  );
}

export default CardComponent;

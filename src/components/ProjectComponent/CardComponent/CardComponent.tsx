import React, { useState } from "react";
import "./CardComponent.css";
import "./CaptionComponent/CaptionComponent";
import CaptionComponent from "./CaptionComponent/CaptionComponent";

function CardComponent() {
  const [addCard, setAddCard] = useState(0);
  const handleClick = () => {
    setAddCard(1);
  };
  return (
    <>
      <div className="card-component">
        Card
        <CaptionComponent />
        {addCard != 1 ? <button onClick={handleClick}>Add Card</button> : null}
      </div>
      {addCard === 1 ? <CardComponent /> : null}
    </>
  );
}

export default CardComponent;

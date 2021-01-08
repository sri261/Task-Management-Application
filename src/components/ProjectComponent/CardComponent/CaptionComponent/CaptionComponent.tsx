import React, { useState } from "react";
import "./CaptionComponent.css";
import { firestoreDB } from "../../../../firebase/firebaseIndex";
function CaptionComponent() {
  const handleSubmit = () => {
    firestoreDB
      .collection("card")
      .doc("ID")
      .set({
        caption: "new caprion",
      })
      .then(() => {
        console.log("added to firestoreDB");
      })
      .catch((error) => {
        console.log("Error adding to firestoreDB", error);
      });
  };
  return (
    <div>
      <button onClick={handleSubmit}>ADD</button>
    </div>
  );
}

export default CaptionComponent;

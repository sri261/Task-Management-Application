import React, { useState } from "react";
import "./CaptionComponent.css";
import { firestoreDB } from "../../../../firebase/firebaseIndex";
function CaptionComponent() {
  const [caption, setCaption] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(caption, "caption");
    firestoreDB
      .collection("card")
      .doc(caption)
      .set({
        caption: caption,
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
      <form onSubmit={handleSubmit}>
        <label>
          Caption:
          <input type="text" onChange={(e) => setCaption(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default CaptionComponent;

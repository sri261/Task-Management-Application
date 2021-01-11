import React, { useState } from "react";
import "./CaptionComponent.css";
// import { firestoreDB } from "../../../../firebase/firebaseIndex";
import { useFirestore } from "react-redux-firebase";
function CaptionComponent() {
  const [caption, setCaption] = useState("");
  const firestore = useFirestore();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(caption, "caption");
    // firestoreDB
    firestore
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
      {/* <form onSubmit={handleSubmit}>
        <input
          className="caption"
          type="text"
          onChange={(e) => setCaption(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form> */}
    </div>
  );
}

export default CaptionComponent;

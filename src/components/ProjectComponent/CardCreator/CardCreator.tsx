import React, { useState } from "react";
import "./CardCreator.css";
import { useFirestore } from "react-redux-firebase";

function CardCreator() {
  const [caption, setCaption] = useState("");
  const [status, setStatus] = useState("");
  const firestore = useFirestore();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // console.log("caption=>", caption);
    // console.log("status=>", status);

    firestore
      .collection("card")
      .doc(caption)
      .set({
        caption: caption,
        timestamp: Date(),
        status: status,
        //  Date.prototype.getMonth(),
      })
      .then(() => {
        console.log("added to firestoreDB");
      })
      .catch((error) => {
        console.log("Error adding to firestoreDB", error);
      });
  };
  return (
    <div className="card-creator">
      <form onSubmit={handleSubmit}>
        Create new Card
        <input
          type="text"
          onChange={(e) => {
            setCaption(e.target.value);
          }}
          placeholder="What is the new task?"
        />
        <select
          onChange={(e) => {
            setStatus(e.target.value);
          }}
        >
          <option>Select Option</option>
          <option value="task-ready">Task Ready</option>
          <option value="in-progress">In Progress</option>
          <option value="needs-review">Needs Review</option>
          <option value="done">Done</option>
        </select>
        <button type="submit">Done</button>
      </form>
    </div>
  );
}

export default CardCreator;

import React, { useState } from "react";
import "./CardCreator.css";
import { useFirestore } from "react-redux-firebase";
import { AiOutlineClose } from "react-icons/ai";
import Tag from "../Tag/Tag";

function CardCreator() {
  const [caption, setCaption] = useState("");
  const [status, setStatus] = useState("");
  const [tag, setTag] = useState("");

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
        tag: tag,
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
        <div className="cardcreator-top-bar">
          <h4>Create new Card</h4>
          <div className="cardcreator-top-bar-close">
            <AiOutlineClose />
          </div>
        </div>
        {/* =================== Input text box ========================== */}

        <input
          type="text"
          onChange={(e) => {
            setCaption(e.target.value);
          }}
          placeholder="What is the new task?"
        />
        {/* =================== Select task dropdown ========================== */}
        <select
          onChange={(e) => {
            setStatus(e.target.value);
          }}
        >
          <option>Select Task Progress</option>
          <option value="Task Ready">Task Ready</option>
          <option value="In Progress">In Progress</option>
          <option value="Needs Review">Needs Review</option>
          <option value="Done">Done</option>
        </select>
        {/* ==================== Select tag dropdown ========================= */}

        <select
          onChange={(e) => {
            setTag(e.target.value);
          }}
        >
          <option>Select Task Tag</option>
          <option value="UI Design">UI Design</option>
          <option value="Copywritng">Copywritng</option>
          <option value="Illustration">Illustration</option>
          <option value="Code">Code</option>
        </select>
        {/* ============================================= */}

        {/* <div onClick={handleTagClick}>
          <Tag tag={"UI Design"} />
          <Tag tag={"Copywritng"} />
          <Tag tag={"Illustration"} />
          <Tag tag={"Code"} />
        </div> */}

        <button type="submit">
          <h6>Done</h6>
        </button>
      </form>
    </div>
  );
}

export default CardCreator;

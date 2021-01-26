import React, { useState } from "react";
import { useFirestore } from "react-redux-firebase";
import { AiOutlineClose } from "react-icons/ai";
import { firestoreDB } from "../../../firebase/firebaseIndex";
import { useDispatch } from "react-redux";

import "./CardCreator.css";
import { updateStore } from "../../../store/actions/actions";

function CardCreator() {
  const [caption, setCaption] = useState("");
  const [status, setStatus] = useState("");
  const [tag, setTag] = useState("");
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  // const firestore = useFirestore();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const timestamp = new Date();
    dispatch(
      updateStore({
        new12: {
          caption: "caption",
          status: "status",
          tag: "tag",
          timestamp: timestamp.toString(),
        },
      })
    );

    setShow(false);

    const timestampOnCard = timestamp.getDay();
    console.log(timestampOnCard);
    firestoreDB
      .collection("card")
      // .doc(caption)
      .doc()
      .set({
        caption: caption,
        timestamp: timestamp.toString(),
        status: status,
        tag: tag,
        commentCount: 0,
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
      {show ? (
        <div className="card-creator">
          <form onSubmit={handleSubmit}>
            <div className="cardcreator-top-bar">
              <h4>Create new Card</h4>
              <div
                className="cardcreator-top-bar-close"
                onClick={() => {
                  setShow(false);
                }}
              >
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
              required
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
              {/*
                REVIEW: tags should be dynamic. use should be able to create new tags.
              */}
              <option>Select Task Tag</option>
              <option value="UI Design">UI Design</option>
              <option value="Copywritng">Copywritng</option>
              <option value="Illustration">Illustration</option>
              <option value="Code">Code</option>
            </select>

            <button type="submit">
              <h6>Done</h6>
            </button>
          </form>
        </div>
      ) : (
        <div onClick={() => setShow(true)}>"+ Add Card"</div>
      )}
    </div>
  );
}

export default CardCreator;

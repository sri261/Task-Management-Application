import React, { useState } from "react";
import { useFirestore } from "react-redux-firebase";
import { AiOutlineClose } from "react-icons/ai";
import { firestoreDB } from "../../../firebase/firebaseIndex";
import { useDispatch } from "react-redux";

import "./CardCreator.css";
import { updateStore } from "../../../store/actions/actions";
import { addTagToStore } from "../../../store/actions/UiActions";

function CardCreator() {
  const [caption, setCaption] = useState("");
  const [status, setStatus] = useState("");
  const [tag, setTag] = useState("");
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const colorArray = [
    ["#fabfc9", "Red"],
    ["#bce2f4", "rgb(33 119 168)"],
    ["#d3ebe3", "rgb(21 123 72)"],
    ["#f3dbf3", "#a136b1"],
  ];
  const index = Math.floor(Math.random() * 4);
  const tagColor: Array<any> = colorArray[index];

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const timestamp = new Date().toISOString();
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
        pins: 0,
      })
      .then(() => {
        console.log("added to firestoreDB");
      })
      .catch((error) => {
        console.log("Error adding to firestoreDB", error);
      });
    firestoreDB
      .collection("Tags")
      .doc(tag)
      .set({ background: tagColor[0], color: tagColor[1] })
      .then(() => {
        dispatch(
          addTagToStore({
            [tag]: { background: tagColor[0], color: tagColor[1] },
          })
        );
        console.log("Tag sent to firestore");
      })
      .catch((error) => {
        console.log("error sending tag to data base", error);
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
            {/* ==================== Add tag  ========================= */}

            <textarea
              onChange={(e: any) => {
                setTag(e.target.value);
              }}
            ></textarea>
            {/* <select
              onChange={(e) => {
                setTag(e.target.value);
              }}
            > */}
            {/*
                REVIEW: tags should be dynamic. use should be able to create new tags.
              */}
            {/* <option>Select Task Tag</option>
              <option value="UI Design">UI Design</option>
              <option value="Copywritng">Copywritng</option>
              <option value="Illustration">Illustration</option>
              <option value="Code">Code</option>
            </select> */}

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

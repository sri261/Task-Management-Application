import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { firestoreDB } from "../../../firebase/firebaseIndex";
import { useDispatch } from "react-redux";
// import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/functions";
import { auth } from "../../../firebase/firebaseIndex";

import "./CardCreator.css";
import { updateStore } from "../../../store/actions/actions";
import { addTagToStore } from "../../../store/actions/UiActions";
import {
  recentActivityToStoreActionMethod,
  addRecentActivityToFireMethod,
} from "../../../store/actions/recentActions";

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
  const user: any = auth().currentUser?.email;

  const handleSubmit = (e: any) => {
    const timestamp = new Date().toISOString();
    e.preventDefault();
    dispatch(recentActivityToStoreActionMethod("card", user));
    addRecentActivityToFireMethod("card", user);

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

            {/*
                REVIEW: tags should be dynamic. use should be able to create new tags.
              */}

            <button type="submit">
              <h6>Done</h6>
            </button>
          </form>
        </div>
      ) : (
        <div onClick={() => setShow(true)}>+ Add Card</div>
      )}
    </div>
  );
}

export default CardCreator;

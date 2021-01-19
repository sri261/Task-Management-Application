import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import NewNoteInput from "../Testing/NewNoteInput";
import { NotesState } from "../store/reducers/notesReducer ";
import { addNote } from "../store/actions/actions";

function TestComp() {
  // const notes = useSelector<NotesState, NotesState["notes"]>(
  const notes = useSelector<NotesState>((state) => state.notes);
  console.log(notes);
  const dispatch = useDispatch();
  const onAddNote = () => {
    dispatch({ type: "ADD_NOTE", payload: "test success" });
    // dispatch();
  };
  return (
    <div>
      {/* <NewNoteInput addNote={onAddNote} /> */}
      <hr />
      <button onClick={onAddNote}>Sample</button>
      {/* <ul>
        {notes.map((note) => {
          return <li key={note}>{note}</li>;
        })}
      </ul> */}
      {notes}
    </div>
  );
}

export default TestComp;
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import NewNoteInput from "../Testing/NewNoteInput";
// import { NotesState } from "../store/reducers/notesReducer ";
// import { addNote } from "../store/actions/actions";

// function TestComp() {
//   const notes = useSelector<NotesState, NotesState["notes"]>(
//     (state) => state.notes
//   );
//   console.log(notes);
//   const dispatch = useDispatch();
//   const onAddNote = (note: string) => {
//     // dispatch({ type: "ADD_NOTE", payload: note });
//     dispatch(addNote(note));
//   };
//   return (
//     <div>
//       <NewNoteInput addNote={onAddNote} />
//       <hr />
//       <ul>
//         {notes.map((note) => {
//           return <li key={note}>{note}</li>;
//         })}
//       </ul>
//     </div>
//   );
// }

// export default TestComp;

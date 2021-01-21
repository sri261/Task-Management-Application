import { ModalAction, MODAL } from "../types";
// ++++++++++++++++++++++++++++++++++++++++++
import { firestoreDB } from "../../firebase/firebaseIndex";

// ++++++++++++++++++++++++++++++++++++++++++
// { type: "ADD_NOTE", payload: note }
export type Action = { type: "ADD_NOTE"; payload: string };
export const addNote = (note: string): Action => ({
  type: "ADD_NOTE",
  payload: note,
});

export const changeModalActionMethod = (input: boolean): ModalAction => {
  return {
    type: MODAL,
    payload: input,
  };
};

//Thunk actions

export const getFireDataThunkTest = () => {
  return firestoreDB.collection("card").onSnapshot((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      console.log(doc.id);
    });
  });
};

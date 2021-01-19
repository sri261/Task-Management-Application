import { ModalAction, MODAL } from "../types";
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

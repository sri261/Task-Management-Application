import { createStore, combineReducers } from "redux";

import { modalReducer } from "./reducers/modalReducer";
import { notesReducer } from "./reducers/notesReducer ";

// const rootReducer = combineReducers({
//   modal: modalReducer,
//   notes: notesReducer,
// });
// const store = createStore(notesReducer);

const store = createStore(modalReducer);

export default store;

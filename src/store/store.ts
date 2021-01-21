import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { modalReducer } from "./reducers/modalReducer";
import { notesReducer } from "./reducers/notesReducer ";
import {
  firebaseReducer,
  addFireToStoreReducer,
} from "./reducers/firebaseReducer";
// const rootReducer = combineReducers({
//   modal: modalReducer,
//   fire: firebaseReducer,
// });

// const store = createStore(addFireToStoreReducer, applyMiddleware(thunk));

const store = createStore(modalReducer, applyMiddleware(thunk));

export default store;

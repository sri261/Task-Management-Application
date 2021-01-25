import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { Reducer } from "../store/reducers/Reducer";
import { uiReducer } from "./reducers/uiReducer";
import { currentUserReducer } from "./reducers/currentUserReducer";
import { commentsReducer } from "../store/reducers/commentsReducer";
// const store = createStore(Reducer, applyMiddleware(thunk));
const store = createStore(
  combineReducers({ Reducer, uiReducer, currentUserReducer, commentsReducer }),
  applyMiddleware(thunk)
);

export default store;

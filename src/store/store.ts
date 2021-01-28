import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { Reducer } from "../store/reducers/Reducer";
import { uiReducer } from "./reducers/uiReducer";
import { commentsReducer } from "../store/reducers/commentsReducer";
import { recentReducer } from "../store/reducers/recentReducer";
const store = createStore(
  combineReducers({ Reducer, uiReducer, commentsReducer, recentReducer }),
  applyMiddleware(thunk)
);

export default store;

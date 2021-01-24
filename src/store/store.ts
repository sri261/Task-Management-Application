import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { Reducer } from "../store/reducers/Reducer";
import { uiReducer } from "./reducers/uiReducer";

// const store = createStore(Reducer, applyMiddleware(thunk));
const store = createStore(
  combineReducers({ Reducer, uiReducer }),
  applyMiddleware(thunk)
);

export default store;

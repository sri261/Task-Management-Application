import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { modalReducer } from "./reducers/modalReducer";

import { reducer } from "../Testing/Test";

const store = createStore(reducer, applyMiddleware(thunk));

export default store;

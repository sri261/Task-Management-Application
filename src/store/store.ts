import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { Reducer } from "../store/reducers/Reducer";

const store = createStore(Reducer, applyMiddleware(thunk));

export default store;

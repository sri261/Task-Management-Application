import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Reducers/rootReducer";
// ==============================================================
import firebase from "../firebase/firebaseIndex"; /*<<<<<<<<<<<<<<<<<<<<<------- */
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import { reduxFirestore, getFirestore } from "redux-firestore";
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;
// declare global {
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//   }
// }

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const initialState = {};
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};
const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument({ getFirebase }))
);

// const store = createStore(
//   rootReducer,
//   composeEnhancers(
//     reactReduxFirebase(firebase, rrfConfig),
//     reactReduxFirebase(firebase, rrfConfig),
//     applyMiddleware(thunk.withExtraArgument({ getFirebase }))
//   )
// );

// const store = createStore(
//   rootReducer,
//   composeEnhancers(
//     reactReduxFirebase(firebase, rrfConfig),
//     reduxFirestore(firebase),
//     applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
//   )
// );
export default store;

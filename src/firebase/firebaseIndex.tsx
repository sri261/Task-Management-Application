// Initialize Firebase
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/functions";
import store from "../Redux/store";
import { createFirestoreInstance } from "redux-firestore";

var firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};
firebase.initializeApp(firebaseConfig);
firebase.firestore(); /*<--------------------*/

export const rrfConfig = {
  userProfile: "users" /*<--------------------*/,
  useFirestoreForProfile: true,
};

export const rrfProps = {
  firebase /*<--------------------*/,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

export const auth = firebase.auth;
export const db = firebase.database();
// export const firestoreDB = firebase.firestore();

export default firebase; /*<--------------------*/

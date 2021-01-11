import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Apps from "./Apps";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./provider/AuthProvider";
import store from "./Redux/store";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { rrfProps } from "./firebase/firebaseIndex";
ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <AuthProvider>
        <Provider store={store}>
          <ReactReduxFirebaseProvider {...rrfProps}>
            <Apps />
          </ReactReduxFirebaseProvider>
        </Provider>
      </AuthProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();

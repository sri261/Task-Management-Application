import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Apps from "./Apps";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import AuthProvider from "./provider/AuthProvider";
import store from "./store/store";
import Test from "./Testing/Test";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <AuthProvider>
        <Provider store={store}>
          {/* <Test /> */}
          <Apps />
        </Provider>
      </AuthProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();

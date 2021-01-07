import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Apps from "./Apps";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./provider/AuthProvider";
ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <AuthProvider>
        <Apps />
      </AuthProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import Apps from "./Apps";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import AuthProvider from "./provider/AuthProvider";
import store from "./store/store";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <AuthProvider>
        <Provider store={store}>
          <Apps />
        </Provider>
      </AuthProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

// ==============================================================
// ReactDOM.render(
//   <BrowserRouter>
//     <React.StrictMode>
//       <AuthProvider>
//         <Provider store={store}>
//           <ReactReduxFirebaseProvider {...rrfProps}>
//             <Apps />
//           </ReactReduxFirebaseProvider>
//         </Provider>
//       </AuthProvider>
//     </React.StrictMode>
//   </BrowserRouter>,
//   document.getElementById("root")
// );
// ==============================================================

reportWebVitals();

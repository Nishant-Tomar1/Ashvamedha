import "./index.css";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";
import store from "./redux/store.js";
import { LoginContextProvider } from "./context/loginContextProvider.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter >
    <Provider store={store}>
      <LoginContextProvider>
        <App />
      </LoginContextProvider>
    </Provider>
  </BrowserRouter>
);

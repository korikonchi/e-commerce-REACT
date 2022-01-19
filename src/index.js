import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { FireBase } from "../src/components/firebase-data/FireBase";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <FireBase />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

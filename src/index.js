import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import GlobalState from "../src/global/GlobalState";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalState>
        <App />
      </GlobalState>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App/App";

import "./styles/default/style.scss";
import "./styles/common/common.scss";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

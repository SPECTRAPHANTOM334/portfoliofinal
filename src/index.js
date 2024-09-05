/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import "./styling/App.css";
import "./styling/icons.css";
import "./styling/header.css";
import "./styling/footer.css";
import "./styling/recentwork.css";
import "./styling/copyright.css";
import "./styling/mediaqueries.css"
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import "./styling/components/App.css";
import "./styling/components/icons.css";
import "./styling/components/header.css";
import "./styling/components/footer.css";
import "./styling/components/skill.css";
import "./styling/components/copyright.css";
import "./styling/components/mediaqueries.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

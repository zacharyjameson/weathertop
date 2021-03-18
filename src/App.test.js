import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <App />
    </Router>,
    div
  );
});

import React from "react";
import ReactDOM from "react-dom";
import Searchbar from "./Searchbar";
import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <Searchbar />
    </Router>,
    div
  );
});

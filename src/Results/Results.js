import React, { Component } from "react";
import { Link } from "react-router-dom";
import ApiContext from "../ApiContext";

class Results extends Component {
  static contextType = ApiContext;
  render() {
    return (
      <div className="results">
        <Link to="/weather-search">
          <button type="button" value="submit">
            Try Another
          </button>
        </Link>
        <div className="main_temp">
          {this.context.current_temp}
          <br />
          {this.context.max_temp}
        </div>
      </div>
    );
  }
}

export default Results;

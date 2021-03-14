import React, { Component } from "react";
import { Link } from "react-router-dom";

class Go extends Component {
  render() {
    return (
      <section>
        <div className="go_main">
          <Link to="/weather-search">Search</Link>
        </div>
      </section>
    );
  }
}

export default Go;

import React, { Component } from "react";
import { Link } from 'react-router-dom'

class HomePage extends Component {
  render() {
    return (
      <div className="homepage_main">
        <p>
          <Link to="/weather-search">I don't feel like looking outside.</Link>
        </p>
      </div>
    );
  }
}

export default HomePage;

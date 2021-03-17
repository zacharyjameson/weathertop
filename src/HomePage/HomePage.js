import React, { Component } from "react";
import { Link } from 'react-router-dom';
import '../App.css'

class HomePage extends Component {
  render() {
    return (
      <div className="App_home">
        <h4>
          <Link to="/weather-search" className="link">I don't feel like looking outside.</Link>
        </h4>
      </div>
    );
  }
}

export default HomePage;

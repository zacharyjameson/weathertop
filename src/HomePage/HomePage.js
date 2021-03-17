import React, { Component } from "react";
import { Link } from 'react-router-dom';
import '../App.css'

class HomePage extends Component {
  render() {
    return (
      <div className="App_home">
        <h4>
          <Link to="/weather-search"><button id="findmyweather">Find My Weather</button></Link>
        </h4>
      </div>
    );
  }
}

export default HomePage;

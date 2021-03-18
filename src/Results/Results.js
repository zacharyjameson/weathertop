import React, { Component } from "react";
import ApiContext from "../ApiContext";
import "../App.css";

class Results extends Component {
  static contextType = ApiContext;
  render() {
    const weather = this.context;

    return (
      <div className="App_results">
        <div className={weather.current_temp ? "results" : "results hidden"}>
          <p>Current Temp</p>
          <h1>{Math.round(weather.current_temp)}&deg;</h1>
          <p>{weather.description}</p>
          Feels Like: {Math.round(weather.feels_like)}&deg;, Humidity:{" "}
          {Math.round(weather.humidity)}&#37;
        </div>
      </div>
    );
  }
}

export default Results;

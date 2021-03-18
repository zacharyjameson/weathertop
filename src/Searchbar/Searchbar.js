import React, { Component } from "react";
import { Link } from "react-router-dom";
import ApiContext from "../ApiContext";
import config from "../config";
import Results from "../Results/Results";
import City from "./City";
import TempScale from "./TempScale";

class Searchbar extends Component {
  state = {
    unit: "",
    query: "",
  };

  handleUnitClick = (e) => {
    this.setState({
      unit: e.target.value,
    });
    console.log(e.target.value);
  };

  handleQuery = (e) => {
    this.setState({
      query: e.target.value,
    });
    console.log(e.target.value);
  };

  validateCity() {
    const validCity = this.state.query.trim();
    if(validCity.length === 0){
      return "City is required"
    } else if (validCity.length > 100) {
      return "Now you're just being silly"
    }
  }

  validateTempScale() {
    const validTemp = this.state.unit.trim();
    if(validTemp.length === 0){
      return "Please select a temperature scale"
    } 
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const query = this.state.query;
    const unit = this.state.unit;
    const url = `${config.API_ENDPOINT}${config.KEY}&units=${unit}&q=${query}`;
    console.log(query, unit);

    fetch(url)
      .then((weather) => {
        console.log(url);
        if (!weather.ok) {
          throw new Error("The weather isn't weather. Please try again later.");
        }
        //console.log("Response:", weather);
        return weather.json();
      })
      .then((weatherJson) => {
        this.setState({
          current_temp: weatherJson.main.temp,
          max_temp: weatherJson.main.temp_max,
          min_temp: weatherJson.main.temp_min,
          description: weatherJson.weather[0].description,
          feels_like: weatherJson.main.feels_like,
          humidity: weatherJson.main.humidity,
        });
        console.log("JSON:", weatherJson);
        console.log("State: ", this.state);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  render() {
    const value = {
      current_temp: this.state.current_temp,
      max_temp: this.state.max_temp,
      min_temp: this.state.min_temp,
      description: this.state.description,
      feels_like: this.state.feels_like,
      humidity: this.state.humidity,
      unit: this.state.unit,
      handleQuery: this.handleQuery,
      handleUnitClick: this.handleUnitClick,
      validateCity: this.validateCity(),
      validateTempScale: this.validateTempScale(),
    };
    return (
      <ApiContext.Provider value={value}>
        <form className="App_main" onSubmit={this.handleSubmit}>
          <div className="searchbar_main">
            <City />
            <br />
            <TempScale />
            <br />
            <Link to="/weathertop">
              <button id="inputbutton" type="button" value="Back">
                Back
              </button>{" "}
            </Link>
            <input id="inputbutton" type="submit" value="Submit" />
          </div>
        </form>
        <Results />
      </ApiContext.Provider>
    );
  }
}

export default Searchbar;

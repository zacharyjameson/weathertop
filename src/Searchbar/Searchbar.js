import React, { Component } from "react";
import { Link } from "react-router-dom";
import ApiContext from "../ApiContext";
import config from "../config";
import Results from "../Results/Results";

class Searchbar extends Component {
  state = {
    unit: "",
    query: "",
  };

  handleUnit = (e) => {
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
      description: this.state.description
    };
    return (
      <ApiContext.Provider value={value}>
        <form className="App_main" onSubmit={this.handleSubmit}>
          <div className="searchbar_main">
            <nav>
              <h4>
                <Link to="/" className="link">
                  <button type="button" value="Back">
                    Back
                  </button>
                </Link>
              </h4>
            </nav>
            <label htmlFor="searchbar_box">Enter a City:</label>{" "}
            <input
              type="text"
              name="searchbar_box"
              id="searchbar_box"
              placeholder="Los Angeles"
              onChange={this.handleQuery}
              required
            />{" "}
            <br />
            <label htmlFor="unit">Unit of measurement:</label>{" "}
            <select id="unit" name="unit" onChange={this.handleUnit} required>
              <option value="standard">Select one...</option>
              <option value="imperial">Imperial</option>
              <option value="metric">Metric</option>
            </select>
            <br />
            <input type="submit" value="Submit" />
          </div>
        </form>
        <Results />
      </ApiContext.Provider>
    );
  }
}

export default Searchbar;

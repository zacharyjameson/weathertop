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
      description: this.state.description,
      unit: this.state.unit
    };
    return (
      <ApiContext.Provider value={value}>
        <form className="App_main" onSubmit={this.handleSubmit}>
          <div className="searchbar_main">
            <label htmlFor="searchbar_box">Enter a City:</label>{" "}
            <input
              type="text"
              name="searchbar_box"
              id="searchbar_box"
              placeholder="Los Angeles"
              onChange={this.handleQuery}
              required
            />
            
            <br />
            <div>Temperature Scale</div>
            <ul className="container" onClick={this.handleUnitClick}>
              <li className="item"><button type="button" className={this.state.unit === 'metric' ? "unitButton activeUnit" : "unitButton"} value="metric">&deg;C</button></li>
              <li className="item"><button type="button" className={this.state.unit === 'imperial' ? "unitButton activeUnit" : "unitButton"} value="imperial">&deg;F</button></li>
              <li className="item"><button type="button" className={this.state.unit === 'standard' ? "unitButton activeUnit" : "unitButton"} value="standard">&deg;K</button></li>
            </ul>
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

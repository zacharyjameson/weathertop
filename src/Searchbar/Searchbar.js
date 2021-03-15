import React, { Component } from "react";
import { Link } from "react-router-dom";

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unit: "",
      query: "",
    };
  }

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
    const key = "0ddf041fb53a2aff9b34fe18f7ed9ebd";
    const url = `https://api.openweathermap.org/data/2.5/weather?&APPID=${key}&units=${unit}&q=${query}`;
    console.log(query, unit);

    fetch(url)
      .then((weather) => {
        console.log(url);
        if (!weather.ok) {
          throw new Error("The weather isn't weather. Please try again later.");
        }
        console.log('Response:', weather);
        return weather.json();
      })
      .then((weatherJson) => {
        console.log('JSON:', weatherJson.main);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="searchbar_main">
          <header>
            <h4>
              <Link to="/" className="link">
                Back
              </Link>
            </h4>
          </header>
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
          <button type="submit" value="submit">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default Searchbar;

import React, { Component } from "react";
import ApiContext from "../ApiContext";
import ValidationError from "../ValidationError";

class City extends Component {
  static contextType = ApiContext;

  render() {
      const weather = this.context;
    return (
      <>
        <label htmlFor="searchbar_box" id="searchbar_label">Enter a City:</label>{"  "}
        <input
          type="text"
          name="searchbar_box"
          id="searchbar_box"
          placeholder="Los Angeles"
          onChange={weather.handleQuery}
          required
        />
        <ValidationError message={weather.validateCity} />
      </>
    );
  }
}

export default City;

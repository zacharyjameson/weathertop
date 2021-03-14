import React, { Component } from "react";
import { Link } from "react-router-dom";

class Searchbar extends Component {
  render() {
    return (
      <div className="searchbar_main">
        <header>
          <h4>
            <Link to="/" className="link">Back</Link>
          </h4>
        </header>
        <label htmlFor="searchbar_box">Enter a City:</label>{" "}
        <input
          type="text"
          name="searchbar_box"
          id="searchbar_box"
          placeholder="Los Angeles"
          required
        />
        <button type="submit" value="submit">Submit</button>
      </div>
    );
  }
}

export default Searchbar;

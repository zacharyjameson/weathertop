import React, { Component } from "react";
import ApiContext from "../ApiContext";
import ValidationError from "../ValidationError";

class TempScale extends Component {
  static contextType = ApiContext;
  render() {
    const weather = this.context;
    return (
      <div>
        <div className="searchbar_label">Temperature Scale</div>
        <ul className="container" onClick={weather.handleUnitClick}>
          <li className="item">
            <button
              type="button"
              className={
                weather.unit === "metric"
                  ? "unitButton activeUnit"
                  : "unitButton"
              }
              value="metric"
            >
              &deg;C
            </button>
          </li>
          <li className="item">
            <button
              type="button"
              className={
                weather.unit === "imperial"
                  ? "unitButton activeUnit"
                  : "unitButton"
              }
              value="imperial"
            >
              &deg;F
            </button>
          </li>
          <li className="item">
            <button
              type="button"
              className={
                weather.unit === "standard"
                  ? "unitButton activeUnit"
                  : "unitButton"
              }
              value="standard"
            >
              &deg;K
            </button>
          </li>
        </ul>
        <ValidationError message={weather.validateTempScale} />
      </div>
    );
  }
}

export default TempScale;

import React, { Component } from "react";
import ApiContext from "../ApiContext";
import ValidationError from "../ValidationError";

class TempScale extends Component {
  static contextType = ApiContext;
  render() {
    const weather = this.context;
    return (
      <>
        <div className="searchbar_label">Temperature Scale</div>
        <div className="container" onClick={weather.handleUnitClick}>
          <div className="item">
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
          </div>
          <div className="item">
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
          </div>
          <div className="item">
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
          </div>
        </div>
        <ValidationError message={weather.validateTempScale} />
      </>
    );
  }
}

export default TempScale;

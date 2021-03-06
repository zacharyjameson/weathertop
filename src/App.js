import React, { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import { Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage/HomePage";

class App extends Component {
  renderMainRoutes() {
    return (
      <>
        <Route exact path="/weathertop" component={HomePage} />
        <Route path="/weather-search" component={Searchbar} />
      </>
    );
  }

  render() {
    return (
      <div className="App_main">
        <header className="App_header">
          <h1>
            <Link to="/weathertop" className="title link">
              Weathertop
            </Link>
          </h1>
        </header>
        <main className="App_main">{this.renderMainRoutes()}</main>
      </div>
    );
  }
}

export default App;

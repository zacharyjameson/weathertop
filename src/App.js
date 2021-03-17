import React, { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import { Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage/HomePage";
import Results from "./Results/Results";

class App extends Component {
  renderMainRoutes() {
    return (
      <>
        <Route exact path="/" component={HomePage} />
        <Route path="/weather-search" component={Searchbar} />
        <Route path="/results" component={Results} />
      </>
    );
  }

  render() {
    return (
      <div className="App_main">
        <header className="App_header">
          <h1>
            <Link to="/" className="title link">
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

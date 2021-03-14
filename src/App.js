import React, { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import { Route, Link } from "react-router-dom";
import Go from "./GoPage/Go";
import "./App.css"
import HomePage from './HomePage/HomePage'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
    };
  }

  renderMainRoutes() {
    return (
      <>
        <Route path="/weather-search" component={Searchbar} />
        <Route path="/welcome" component={Go} />
        <Route exact path="/" component={HomePage} />
      </>
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App_header">
          <h1>
            <Link to="/" className="link">Find My Weather</Link>
          </h1>
        </header>
        <main className="App_main">
          {this.renderMainRoutes()}
        </main>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import { Route, Link } from "react-router-dom";
import Go from "./GoPage/Go";

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
      </>
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App_header">
          <h1>
            <Link to="/weather-search">Find My Weather</Link>
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

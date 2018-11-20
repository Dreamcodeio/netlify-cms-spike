import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Page from "./Page";

import "./assets/stylesheets/main.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <img
            src={logo}
            className="App-logo"
            alt="logo"
            style={{ width: 100, height: 100 }}
          />
        </header>
        <div className="content">
          <Page />
        </div>
      </div>
    );
  }
}

export default App;

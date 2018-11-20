import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Product from "./product";

import "./assets/stylesheets/main.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>just testing !!!</p>
          <Product />
        </header>
      </div>
    );
  }
}

export default App;

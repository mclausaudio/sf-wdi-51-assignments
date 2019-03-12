import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import TodosContainer from "./containers/TodosContainer";
import Header from "./components/Header";

import Routes from "./config/Routes";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Routes />
      </div>
    );
  }
}

export default App;

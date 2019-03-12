import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../components/Home";
import TodosContainer from "../containers/TodosContainer";

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/todos" component={TodosContainer} />
      </Switch>
    );
  }
}

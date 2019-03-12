import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        <h1>Todo app</h1>
        <nav>
          <Link to={"/"}>Home</Link>
          <Link to={"/todos"}>Todos</Link>
        </nav>
      </div>
    );
  }
}

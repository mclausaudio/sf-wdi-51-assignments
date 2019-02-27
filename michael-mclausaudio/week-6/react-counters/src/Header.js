import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <h1 className="App-title">React Counters</h1>
        <p>Current Number of Counters: {this.props.counters}</p>
        <button onClick={this.props.increaseCounter}>+</button>
        <button onClick={this.props.decreaseCounter}>-</button>
      </header>
    );
  }
}

export default Header;

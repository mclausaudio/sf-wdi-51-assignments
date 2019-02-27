import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: 0
  };

  increaseCount = e => {
    let newCount = this.state.count;
    newCount++;
    this.setState({
      count: newCount
    });
  };

  decreaseCount = e => {
    let newCount = this.state.count - 1;
    this.setState({
      count: newCount
    });
  };

  render() {
    return (
      <div className="mr-5">
        <h2>{this.state.count}</h2>
        <button onClick={this.increaseCount}>+</button>
        <button onClick={this.decreaseCount}>-</button>
      </div>
    );
  }
}

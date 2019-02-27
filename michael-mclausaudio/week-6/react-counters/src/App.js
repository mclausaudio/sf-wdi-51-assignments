import React, { Component } from "react";
import Header from "./Header";
import CounterList from "./CounterList";
import Counter from "./Counter";

import styles from "./styles/index";

class App extends Component {
  state = {
    // counters: 0,
    counterArray: []
  };

  increaseCounter = e => {
    // let newCount = this.state.counters + 1;
    let newArray = this.state.counterArray;
    newArray.push(<Counter />);
    this.setState({
      // counters: newCount,
      counterArray: newArray
    });
    // console.log(this.state.counters);
  };

  decreaseCounter = e => {
    // let newCount = this.state.counters === 0 ? 0 : this.state.counters - 1;
    let newArray = this.state.counterArray;
    newArray.pop();
    this.setState({
      // counters: newCount,
      counterArray: newArray
    });
    // console.log(this.state.counters);
  };

  render() {
    return (
      <div className="App" style={styles.backgroundColor}>
        <Header
          counters={this.state.counterArray.length}
          increaseCounter={this.increaseCounter}
          decreaseCounter={this.decreaseCounter}
        />
        <div className="container">
          <CounterList counterArray={this.state.counterArray} />
        </div>
      </div>
    );
  }
}

export default App;

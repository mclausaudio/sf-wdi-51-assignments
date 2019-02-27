import React, { Component } from "react";
import Counter from "./Counter";

const CounterList = props => {
  let counters = props.counterArray.map(c => {
    return c;
  });
  return <div className="d-flex">{counters}</div>;
};

export default CounterList;

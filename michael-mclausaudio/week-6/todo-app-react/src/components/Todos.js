import React, { Component } from "react";
import Todo from "./Todo";

export default class Todos extends Component {
  render() {
    let todos = this.props.todos.map(t => {
      console.log(t);
      return (
        <Todo
          key={t._id}
          id={t._id}
          todo={t}
          deleteTodo={this.props.deleteTodo}
          updateTodo={this.props.updateTodo}
        />
      );
    });
    return <ul>{todos}</ul>;
  }
}

import React, { Component } from "react";

export default class TodoForm extends Component {
  state = {
    todo: ""
  };
  onChange = event => {
    this.setState({
      todo: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    var todo = this.state.todo;
    console.log(this.props.id);
    this.props.updateTodo(this.props.id, JSON.stringify(this.props.todo));
    this.setState({
      todo: ""
    });
  };

  render() {
    return (
      <div style={this.props.style} className="todoForm">
        <form onSubmit={this.onSubmit}>
          <input
            autoFocus={this.props.autoFocus}
            onChange={this.onChange}
            placeholder="Write a todo here ..."
            type="text"
            value={(this.state && this.state.todo) || ""}
          />
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

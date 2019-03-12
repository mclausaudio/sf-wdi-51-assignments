import React, { Component } from "react";

export default class CreateTodoForm extends Component {
  state = {
    todo: ""
  };

  onInputChange = e => {
    this.setState({
      todo: e.target.value
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    let todo = this.state.todo;
    this.props.createTodo(todo);
    console.log(todo);
    this.setState({
      todo: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} id="taskForm">
          <input
            onChange={this.onInputChange}
            type="text"
            placeholder={"What do you need to do.."}
            value={this.state.todo}
          />
          <button type="submit" id="addTask" className="btn">
            Add
          </button>
        </form>
      </div>
    );
  }
}

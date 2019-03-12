import React, { Component } from "react";

import TodoForm from "../components/TodoForm";

export default class Todo extends Component {
  state = {
    formStyle: { display: "none" },
    bodyStyle: { display: "block" },
    editingTodoId: null
  };

  deleteClickedTodo = () => {
    this.props.deleteTodo(this.props.todo);
  };

  //   toggleBodyForm = () => {
  //     this.state.formStyle.display === "block"
  //       ? this.setState({
  //           formStyle: { display: "none" },
  //           bodyStyle: { display: "block" },
  //           editingTodoId: null
  //         })
  //       : this.setState({
  //           formStyle: { display: "block" },
  //           bodyStyle: { display: "none" },
  //           editingTodoId: this.props.todo._id
  //         });
  //   };

  render() {
    console.log(this.props.id);
    return (
      <div>
        <li data-todos-index={this.props.todo._id}>
          <div style={this.state.bodyStyle}>
            <span>{this.props.todo.body}</span>
            <a className="edit" onClick={this.toggleBodyForm}>
              Edit
            </a>
            <a className="remove" onClick={this.deleteClickedTodo}>
              Remove
            </a>
          </div>
          <TodoForm
            id={this.props.id}
            todo={this.props.todo}
            autoFocus={true}
            updateTodo={this.props.updateTodo}
            buttonName="Update Todo!"
          />
        </li>
      </div>
    );
  }
}

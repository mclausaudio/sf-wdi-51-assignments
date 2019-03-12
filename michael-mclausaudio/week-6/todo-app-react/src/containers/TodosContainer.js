import React, { Component } from "react";

import TodosModel from "../models/Todo";
import Todos from "../components/Todos";
import TodoModel from "../models/Todo";
import CreateTodoForm from "../components/CreateTodoForm";

export default class TodosContainer extends Component {
  state = {
    todos: [],
    todo: ""
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    TodosModel.all().then(res => {
      this.setState({
        todos: res.data.todos,
        todo: ""
      });
    });
  }

  createTodo = todo => {
    let newTodo = {
      body: todo,
      completed: false
    };
    TodoModel.create(newTodo).then(res => {
      let todos = this.state.todos;
      let newTodos = todos.push(res.data);
      this.setState({ newTodos });
      console.log(this.state.todos);
    });
  };

  deleteTodo = todo => {
    TodoModel.delete(todo).then(res => {
      let todos = this.state.todos.filter(function(todo) {
        return todo._id !== res.data._id;
      });
      this.setState({
        todos
      });
    });
  };

  updateTodo = (todoBody, todoId) => {
    function isUpdatedTodo(todo) {
      return todo._id === todoId;
    }
    TodoModel.update(todoId, todoBody).then(res => {
      let todos = this.state.todos;
      todos.find(isUpdatedTodo).body = todoBody.body;
      this.setState({
        todos: todos
      });
    });
  };
  render() {
    return (
      <div>
        <h1>Todos Container</h1>
        <CreateTodoForm createTodo={this.createTodo} />
        <Todos
          todos={this.state.todos}
          deleteTodo={this.deleteTodo}
          updateTodo={this.updateTodo}
        />
      </div>
    );
  }
}

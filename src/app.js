import {Todo} from './resources/js/todo'

export class App {

  constructor() {

    this.heading = "Todo list";

    this.todos   = [];

    this.todoDescription = "";

  }

  addTodo() {
    event.stopPropagation();

    if(this.todoDescription) {
      this.todos.push(new Todo(this.todoDescription));
      this.todoDescription = '';
    }
  }
  removeTodo(todo) {
    let index = this.todos.indexOf(todo);

    if(index !== -1) {
      this.todos.splice(index,1);
    }
  }

  duplicateTodo(todo) {
    this.todos.push(todo);
  }
}

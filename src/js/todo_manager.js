import { projectManager } from "./project_manager";
import { addTodoToMain, updateTodo } from "./main";
export { todoManager };

const todoManager = (function () {
  function findTodo(todo) {
    const todos = document.querySelector("#todos");
    const index = Array.from(todos.children).indexOf(todo);
    return index;
  }

  function addTodo(todo) {
    projectManager.getCurrentProject().todos.push(todo);
    addTodoToMain(todo);
  }

  function editTodo(todo, title, description, date, priority) {
    todo.title = title;
    todo.description = description;
    todo.dueDate = date;
    todo.priority = priority;
    updateTodo(todo);
  }

  function deleteTodo(todo) {
    projectManager.getCurrentProject().todos.splice(findTodo(todo), 1);
  }

  // function completeTodo() {

  // }
  return { findTodo, addTodo, editTodo, deleteTodo };
})();

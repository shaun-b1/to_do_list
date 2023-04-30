import { projectManager } from "./project_manager";
import { addTodoToMain } from "./main";
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

  // function editTodo() {
  //     // logic to edit the selected todo
  // }

  function deleteTodo(todo) {
    projectManager.getCurrentProject().todos.splice(findTodo(todo), 1);
  }

  // function completeTodo() {

  // }
  return { findTodo, addTodo, deleteTodo };
})();

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
    projectManager.showCurrentProject().todos.push(todo);
    addTodoToMain(todo);
  }

  // function editTodo() {
  //     // logic to edit the selected todo
  // }

  // function deleteTodo() {
  //     // logic to delete the selected todo
  // }

  // function completeTodo() {

  // }
  return { findTodo, addTodo };
})();

import { projectManager } from "./project_manager";
import { addTodoToMain } from "./main";
export { todoManager };

const todoManager = (function () {
  //   function findTodo(currentProject) {
  //     console.log(currentProject);
  //   }

  function addTodo(todo) {
    projectManager.showCurrentProject().todos.push(todo);
    console.log(projectManager.showCurrentProject().todos);
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
  return { addTodo };
})();

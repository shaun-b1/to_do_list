import { projectManager } from "./project_manager";
import { todoManager } from "./todo_manager";
import { toDoModal } from "./todo_modal";
export { addAllTodos, addTodoUI, editTodo, updateTodo, deleteTodo };

function addAllTodos() {
  const todos = document.querySelector("#todos");
  todos.replaceChildren();
  for (const todo of projectManager.getCurrentProject().todos) {
    addTodoUI(todo);
  }
}

function addTodoUI(newTodo) {
  const todos = document.querySelector("#todos");
  const todo = document.createElement("li");
  todo.classList.add("todo");

  const title = document.createElement("h3");
  title.classList.add("todo-title");
  title.textContent = `${newTodo.title}`;

  const description = document.createElement("p");
  description.classList.add("todo-description");
  description.textContent = `${newTodo.description}`;

  const dueDate = document.createElement("p");
  dueDate.classList.add("todo-dueDate");
  dueDate.textContent = `${newTodo.dueDate}`;

  const priority = document.createElement("p");
  priority.classList.add("todo-priority");
  priority.textContent = `${newTodo.priority}`;

  const done = document.createElement("input");
  done.type = "checkbox";
  done.name = "done";
  done.value = true;
  done.addEventListener("click", (e) => {
    congratulations();
    setTimeout(() => {
      todoManager.deleteTodo(e.target.parentElement);
      done.parentElement.remove();
    }, 1500);
    setTimeout(() => {
      const congratulationsModal = document.querySelector(".success-popup");
      congratulationsModal.remove();
    }, 3000);
  });

  const editButton = editTodo();
  const deleteButton = deleteTodo();

  todo.append(
    done,
    title,
    description,
    dueDate,
    priority,
    editButton,
    deleteButton
  );
  todos.appendChild(todo);
}

function editTodo() {
  const button = document.createElement("button");
  button.classList.add("edit-todo-button");
  button.textContent = "...";
  button.addEventListener("click", (e) => {
    document.body.appendChild(
      toDoModal(
        projectManager.getCurrentProject().todos[
          todoManager.findTodo(e.target.parentElement)
        ]
      )
    );
  });
  return button;
}

function updateTodo(todo) {
  const todos = document.querySelector("#todos");
  const editedTodo = Array.from(todos.children).at(
    projectManager.getCurrentProject().todos.indexOf(todo)
  );
  editedTodo.querySelector(".todo-title").textContent = `${todo.title}`;
  editedTodo.querySelector(
    ".todo-description"
  ).textContent = `${todo.description}`;
  editedTodo.querySelector(".todo-dueDate").textContent = `${todo.dueDate}`;
  editedTodo.querySelector(".todo-priority").textContent = `${todo.priority}`;
}

function deleteTodo() {
  const button = document.createElement("button");
  button.classList.add("delete-todo-button");
  button.textContent = "x";
  button.addEventListener("click", (e) => {
    todoManager.deleteTodo(e.target.parentElement);
    button.parentElement.remove();
  });
  return button;
}

function congratulations() {
  const main = document.querySelector("main");
  const successPopup = document.createElement("div");
  const closePopup = document.createElement("div");
  const button = document.createElement("button");
  const popupContent = document.createElement("div");
  const text = document.createElement("p");

  successPopup.classList.add("success-popup");
  text.textContent = "Congrats! 🎉";
  button.textContent = "x";

  button.addEventListener("click", () => {
    successPopup.remove();
  });

  closePopup.appendChild(button);
  popupContent.appendChild(text);
  successPopup.append(closePopup, popupContent);
  main.append(successPopup);
}
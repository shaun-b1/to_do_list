import { projectManager } from "./project_manager";
import { todoManager } from "./todo_manager";
import { toDoModal } from "./todo_modal";
import { format, parseISO } from "date-fns";
export { addAllTodos, addTodoUI, editTodo, updateTodo, deleteTodo };

function addAllTodos(project) {
  const todos = document.querySelector("#todos");
  todos.replaceChildren();
  for (const todo of project.todos) {
    addTodoUI(todo);
  }
}

function addTodoUI(newTodo) {
  const todos = document.querySelector("#todos");
  const todo = document.createElement("li");
  todo.classList.add("todo");

  const todoContent = document.createElement("div");
  todoContent.classList.add("todo-content");

  const title = document.createElement("h3");
  title.classList.add("todo-title");
  title.textContent = `${newTodo.title}`;

  const description = document.createElement("p");
  description.classList.add("todo-description");
  description.textContent = `${newTodo.description}`;

  const dueDate = document.createElement("p");
  dueDate.classList.add("todo-dueDate");
  dueDate.textContent = format(parseISO(newTodo.dueDate), "E, do MMM");

  todoContent.append(title, description, dueDate);

  const done = document.createElement("div");
  done.classList.add("done");
  const doneInput = document.createElement("input");
  doneInput.type = "checkbox";
  doneInput.id = `done-input-${newTodo.creationDate}`;
  doneInput.addEventListener("click", (e) => {
    congratulations();
    setTimeout(() => {
      todoManager.deleteTodo(e.target.parentElement.parentElement);
      doneInput.parentElement.parentElement.remove();
    }, 1500);
    setTimeout(() => {
      const congratulationsModal = document.querySelector(".success-popup");
      congratulationsModal.remove();
    }, 3000);
  });
  const doneLabel = document.createElement("label");
  doneLabel.htmlFor = `done-input-${newTodo.creationDate}`;
  doneLabel.classList.add(`priority-${newTodo.priority}`);
  done.append(doneInput, doneLabel);

  const buttonSection = document.createElement("div");
  buttonSection.classList.add("todo-button-section");
  const editButton = editTodo();
  const deleteButton = deleteTodo();
  buttonSection.append(editButton, deleteButton);

  todo.append(done, todoContent, buttonSection);
  todos.appendChild(todo);
}

function editTodo() {
  const button = document.createElement("button");
  button.classList.add("edit-todo-button", "material-icons-round");
  button.textContent = "edit";
  button.addEventListener("click", (e) => {
    document.body.appendChild(
      toDoModal(
        projectManager.getCurrentProject().todos[
          todoManager.findTodo(e.target.parentElement.parentElement)
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
  const partialClass = "priority-";
  editedTodo.querySelector(".todo-title").textContent = `${todo.title}`;
  editedTodo.querySelector(
    ".todo-description"
  ).textContent = `${todo.description}`;
  editedTodo.querySelector(".todo-dueDate").textContent = format(
    parseISO(todo.dueDate),
    "E, do MMM"
  );
  editedTodo.querySelector("label").classList.forEach((className) => {
    if (className.startsWith(partialClass)) {
      editedTodo
        .querySelector("label")
        .classList.replace(className, `priority-${todo.priority}`);
    }
  });
  // .classList.replace('[class^="priority-"]', `priority-${todo.priority}`)
}

function deleteTodo() {
  const button = document.createElement("button");
  button.classList.add("delete-todo-button", "material-icons-round");
  button.textContent = "delete_outline";
  button.addEventListener("click", (e) => {
    todoManager.deleteTodo(e.target.parentElement.parentElement);
    button.parentElement.parentElement.remove();
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

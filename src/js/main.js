import { projectManager } from "./project_manager";
import { todoManager } from "./todo_manager";
import { toDoModal } from "./todo_modal";
export { main, addTodoToMain, updateProjectTitle, footer };

function main() {
  const title = document.createElement("div");
  title.id = "main-title";
  const titleText = document.createElement("h2");
  titleText.textContent = "lol";

  const button = document.createElement("button");
  button.id = "add-todo-button";
  button.setAttribute("type", "button");
  button.textContent = "Click me!";
  button.addEventListener("click", () => {
    todoManager.findTodo();
    document.body.appendChild(toDoModal());
  });

  const todos = document.createElement("ul");
  todos.id = "todos";

  const main = document.createElement("main");
  title.append(titleText, button);
  main.append(title, todos);

  return main;
}

function addTodoToMain(newTodo) {
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

function updateProjectTitle(project) {
  const projectTitle = document.getElementById("main-title").firstChild;
  if (project) {
    projectTitle.textContent = `${project.title}`;
  } else {
    projectTitle.textContent = "No Project Selected!";
  }
}

function editTodo() {
  const button = document.createElement("button");
  button.classList.add("edit-todo-button");
  button.textContent = "...";
  button.addEventListener("click", () => {
    console.log(projectManager.showCurrentProject().todos);
  });
  return button;
}

function deleteTodo() {
  const button = document.createElement("button");
  button.classList.add("delete-todo-button");
  button.textContent = "x";
  button.addEventListener("click", (e) => {
    console.log(todoManager.findTodo(e.target.parentElement));
  });
  return button;
}

function footer() {
  const footer = document.createElement("footer");
  footer.textContent = "Hello there";

  return footer;
}

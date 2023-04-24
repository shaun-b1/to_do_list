import { toDoModal } from "./todo_modal";
export { main, updateProjectTitle, addTodoToMain, footer };

function main() {
  const title = document.createElement("div");
  title.id = "main-title";
  const titleText = document.createElement("h2");
  titleText.innerHTML = "lol";

  const button = document.createElement("button");
  button.id = "add-todo-button";
  button.setAttribute("type", "button");
  button.innerText = "Click me!";
  button.addEventListener("click", () => {
    document.body.appendChild(toDoModal());
  });

  const todos = document.createElement("ul");
  todos.id = "todos";

  const main = document.createElement("main");
  title.append(titleText, button);
  main.append(title, todos);

  return main;
}

function updateProjectTitle(project) {
  const projectTitle = document.getElementById("main-title").firstChild;
  if (project) {
    projectTitle.innerText = `${project.title}`;
  } else {
    projectTitle.innerText = "No Project Selected!";
  }
}

function addTodoToMain(newTodo) {
  const todos = document.querySelector("#todos");
  const todo = document.createElement("li");
  todo.classList.add("todo");

  const title = document.createElement("h3");
  title.classList.add("todo-title");
  title.innerText = `${newTodo.title}`;

  const description = document.createElement("p");
  description.classList.add("todo-description");
  description.innerText = `${newTodo.description}`;

  const dueDate = document.createElement("p");
  dueDate.classList.add("todo-dueDate");
  dueDate.innerText = `${newTodo.dueDate}`;

  const priority = document.createElement("p");
  priority.classList.add("todo-priority");
  priority.innerText = `${newTodo.priority}`;

  const done = document.createElement("input");
  done.type = "checkbox";
  done.name = "done";
  done.value = true;

  todo.append(done, title, description, dueDate, priority);
  todos.appendChild(todo);
}

function footer() {
  const footer = document.createElement("footer");
  footer.innerText = "Hello there";

  return footer;
}

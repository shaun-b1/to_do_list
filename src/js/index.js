/* eslint-disable no-unused-vars */
import "../css/style.css";
import "../css/reset.css";
import { Todo } from "./todo";
import { Project } from "./project";

function component() {
  const container = document.createElement("div");
  container.classList.add("container");

  const header = document.createElement("header");
  header.innerText = "Hello there";

  const mainTitle = document.createElement("div");
  mainTitle.classList.add("title");
  const mainTitleText = document.createElement("h2");
  mainTitleText.innerText = "Hello there";

  const addTodoButton = document.createElement("button");
  addTodoButton.id = "add-todo-button";
  addTodoButton.setAttribute("type", "button");
  addTodoButton.innerText = "Click me!";

  const main = document.createElement("main");
  mainTitle.append(mainTitleText, addTodoButton);
  main.appendChild(mainTitle);

  const asideTitle = document.createElement("div");
  asideTitle.classList.add("title");
  const asideTitleText = document.createElement("h2");
  asideTitleText.innerText = "Hello there";

  const addProjectButton = document.createElement("button");
  addProjectButton.id = "add-project-button";
  addProjectButton.setAttribute("type", "button");
  addProjectButton.innerText = "Click me!";

  const aside = document.createElement("aside");
  asideTitle.append(asideTitleText, addProjectButton);
  aside.appendChild(asideTitle);

  const footer = document.createElement("footer");
  footer.innerText = "Hello there";

  container.append(header, aside, main, footer);
  document.body.appendChild(container);

  return container;
}

document.body.appendChild(component());

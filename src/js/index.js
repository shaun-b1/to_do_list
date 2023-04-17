/* eslint-disable no-unused-vars */
import "../css/style.css";
import "../css/reset.css";
import { Todo } from "./todo";
import { Project } from "./project";
import { aside, addProjectToAside } from "./aside";
import { header } from "./header";
import { main, footer } from "./main";

const allProjects = [];
let currentProject;

const container = document.createElement("div");
container.classList.add("container");
container.append(
  header(),
  aside(allProjects, currentProject),
  main(currentProject),
  footer()
);
document.body.appendChild(container);

const projects = document.getElementById("projects");

const homeProject = new Project("Home", "grey");
allProjects.push(homeProject);
projects.appendChild(addProjectToAside(homeProject, allProjects));

// const addTodoButton = document.getElementById("add-todo-button");
// const toDoModal = document.getElementById("to");

// submit.addEventListener("click", (e) => {
//     e.preventDefault;
//     modal.style.display = "none";
//   });

//   addTodoButton.addEventListener("click", () => {
//     modal.style.display = "block";
//   });

/* eslint-disable no-unused-vars */
import "../css/style.css";
import "../css/reset.css";
import { Todo } from "./todo";
import { Project } from "./project";
import { aside } from "./aside";
import { header } from "./header";
import { main, footer } from "./main";
import { projectModal } from "./project_modal";

const container = document.createElement("div");
container.classList.add("container");
container.append(header(), aside(), main(), footer());
document.body.appendChild(container);

const projects = [];

const addProjectButton = document.getElementById("add-project-button");

addProjectButton.addEventListener("click", () => {
  document.body.appendChild(projectModal());

  const projectSubmit = document.getElementById("project-submit");
  projectSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    const newProject = new Project(
      document.getElementById("title").value,
      document.getElementById("colour").value
    );
    projects.push(newProject);
    console.log(projects);
    projectSubmit.parentElement.parentElement.parentElement.remove();
  });
});

console.log(projects);

// const addTodoButton = document.getElementById("add-todo-button");
// const toDoModal = document.getElementById("to");

// submit.addEventListener("click", (e) => {
//     e.preventDefault;
//     modal.style.display = "none";
//   });

//   addTodoButton.addEventListener("click", () => {
//     modal.style.display = "block";
//   });

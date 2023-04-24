/* eslint-disable no-unused-vars */
import "../css/style.css";
import "../css/reset.css";
import { Todo } from "./todo";
import { Project } from "./project";
import { aside, addAllProjects } from "./aside";
import { header } from "./header";
import { main, footer } from "./main";

const container = document.createElement("div");
container.classList.add("container");
container.append(header(), aside(), main(), footer());
document.body.appendChild(container);
addAllProjects();

// const addTodoButton = document.getElementById("add-todo-button");
// const toDoModal = document.getElementById("to");

// submit.addEventListener("click", (e) => {
//     e.preventDefault;
//     modal.style.display = "none";
//   });

//   addTodoButton.addEventListener("click", () => {
//     modal.style.display = "block";
//   });

/* eslint-disable no-unused-vars */
import "../css/style.css";
import "../css/reset.css";
import { aside } from "./aside";
import { header } from "./header";
import { main, footer } from "./main";
import { addAllProjects } from "./project_ui";
import { projectManager } from "./project_manager";

function initialise() {
  const container = document.createElement("div");
  container.classList.add("container");
  container.append(header(), aside(), main(), footer());
  document.body.appendChild(container);
}

initialise();
addAllProjects();

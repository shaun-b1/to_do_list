/* eslint-disable no-unused-vars */
import "../css/reset.css";
import "../css/style.css";
import { aside } from "./aside";
import { header } from "./header";
import { main, footer } from "./main";
import { addAllProjects } from "./project_ui";

function initialise() {
  const container = document.createElement("div");
  container.classList.add("container");
  container.append(header(), aside(), main(), footer());
  document.body.appendChild(container);
}

initialise();
addAllProjects();

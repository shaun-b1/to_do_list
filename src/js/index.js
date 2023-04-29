/* eslint-disable no-unused-vars */
import "../css/style.css";
import "../css/reset.css";
import { aside, addAllProjects } from "./aside";
import { header } from "./header";
import { main, footer } from "./main";

const container = document.createElement("div");
container.classList.add("container");
container.append(header(), aside(), main(), footer());
document.body.appendChild(container);
addAllProjects();

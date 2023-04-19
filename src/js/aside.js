import { createProjectModal } from "./project_modal";

function aside() {
  const title = document.createElement("div");
  title.classList.add("title");
  const titleText = document.createElement("h2");
  titleText.innerText = "Projects";

  const button = document.createElement("button");
  button.id = "add-project-button";
  button.setAttribute("type", "button");
  button.innerText = "Add a new project";

  const projects = document.createElement("ul");
  projects.id = "projects";

  const aside = document.createElement("aside");
  title.append(titleText, button);
  aside.append(title, projects);

  button.addEventListener("click", () => {
    document.body.appendChild(createProjectModal());
  });

  return aside;
}

function addProjectToAside(newProject) {
  const project = document.createElement("li");
  project.classList.add("project");

  const name = document.createElement("h3");
  name.textContent = `${newProject.title}`;
  name.classList.add("title");
  name.setAttribute("background-color", `${newProject.colour}`);

  const button = deleteProject();

  project.append(name, button);
  // projects.appendChild(project)
}

function deleteProject() {
  const button = document.createElement("button");
  button.classList.add("delete-project-button");
  button.textContent = "x";

  return button;
}

export { aside, addProjectToAside };

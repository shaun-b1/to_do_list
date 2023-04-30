import { projectModal } from "./project_modal";
import { projectManager } from "./project_manager";
import { updateProjectTitle } from "./main";
export { aside, addAllProjects, addProjectToAside, updateProjectInAside };

function aside() {
  const title = document.createElement("div");
  title.id = "aside-title";
  const titleText = document.createElement("h2");
  titleText.textContent = "Projects";

  const button = document.createElement("button");
  button.id = "add-project-button";
  button.setAttribute("type", "button");
  button.textContent = "Add a new project";
  button.addEventListener("click", () =>
    document.body.appendChild(projectModal())
  );

  const projects = document.createElement("ul");
  projects.id = "projects";

  const aside = document.createElement("aside");
  title.append(titleText, button);
  aside.append(title, projects);

  return aside;
}

function addAllProjects() {
  for (const project in projectManager.projects) {
    addProjectToAside(project);
  }
}

function addProjectToAside(newProject) {
  const projects = document.querySelector("#projects");
  const project = document.createElement("li");
  project.classList.add("project");

  const name = document.createElement("h3");
  name.textContent = `${newProject.title}`;
  name.classList.add("project-title");
  name.setAttribute("style", `background: ${newProject.colour}`);

  const editButton = editProject();
  const deleteButton = deleteProject();
  project.addEventListener("click", (e) => {
    projectManager.setCurrentProject(e.target.parentElement);
  });

  project.append(name, editButton, deleteButton);
  projects.appendChild(project);
  updateProjectTitle(project);
}

function updateProjectInAside(project) {
  const projects = document.getElementById("projects");
  const editedProject = Array.from(projects.children)
    .at(projectManager.projects.indexOf(project))
    .querySelector(".project-title");
  editedProject.textContent = `${project.title}`;
  editedProject.setAttribute("style", `background: ${project.colour}`);
}

function editProject() {
  const button = document.createElement("button");
  button.classList.add("edit-project-button");
  button.textContent = "...";
  button.addEventListener("click", (e) => {
    document.body.appendChild(
      projectModal(
        projectManager.projects[
          projectManager.findProject(e.target.parentElement)
        ]
      )
    );
  });
  return button;
}

function deleteProject() {
  const button = document.createElement("button");
  button.classList.add("delete-project-button");
  button.textContent = "x";
  button.addEventListener("click", (e) => {
    projectManager.deleteProject(e.target.parentNode);
    button.parentElement.remove();
  });
  return button;
}

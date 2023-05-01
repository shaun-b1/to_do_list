import { projectManager } from "./project_manager";
import { projectModal } from "./project_modal";
export {
  addAllProjects,
  addProjectUI,
  editProject,
  updateProject,
  updateProjectTitle,
  deleteProject,
};

function addAllProjects() {
  for (const project of projectManager.projects) {
    addProjectUI(project);
  }
  projectManager.setCurrentProject(0);
}

function addProjectUI(newProject) {
  const projects = document.querySelector("#projects");
  const project = document.createElement("li");
  project.classList.add("project");

  const colour = document.createElement("p");
  colour.textContent = "•";
  colour.classList.add("project-colour");
  colour.setAttribute("style", `color: ${newProject.colour}`);

  const name = document.createElement("h3");
  name.textContent = `${newProject.title}`;
  name.classList.add("project-title");

  const nameSection = document.createElement("div");

  const editButton = editProject();
  const deleteButton = deleteProject();

  const buttonSection = document.createElement("div");

  project.addEventListener("click", (e) => {
    projectManager.setCurrentProject(e.currentTarget);
  });

  nameSection.append(colour, name);
  buttonSection.append(editButton, deleteButton);
  project.append(nameSection, buttonSection);
  projects.appendChild(project);
  updateProjectTitle(project);
}

function editProject() {
  const button = document.createElement("button");
  button.classList.add("edit-project-button");
  button.textContent = "...";
  button.addEventListener("click", (e) => {
    document.body.appendChild(
      projectModal(
        projectManager.projects[projectManager.findProject(e.currentTarget)]
      )
    );
  });
  return button;
}

function updateProject(project) {
  const projects = document.getElementById("projects");
  const editedProjectTitle = Array.from(projects.children)
    .at(projectManager.projects.indexOf(project))
    .querySelector(".project-title");
  editedProjectTitle.textContent = `${project.title}`;
  const editedProjectColour = Array.from(projects.children)
    .at(projectManager.projects.indexOf(project))
    .querySelector(".project-colour");
  editedProjectColour.setAttribute("style", `color: ${project.colour}`);
}

function updateProjectTitle(project) {
  const projectTitle = document.getElementById("main-title").firstChild;
  if (project) {
    projectTitle.textContent = `${project.title}`;
  } else {
    projectTitle.textContent = "No Project Selected!";
  }
}

function deleteProject() {
  const button = document.createElement("button");
  button.classList.add("delete-project-button");
  button.textContent = "x";
  button.addEventListener("click", (e) => {
    projectManager.deleteProject(e.currentTarget);
    button.parentElement.parentElement.remove();
  });
  return button;
}

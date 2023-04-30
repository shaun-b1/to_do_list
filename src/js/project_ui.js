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
  for (const project in projectManager.projects) {
    addProjectUI(project);
  }
}

function addProjectUI(newProject) {
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

function updateProject(project) {
  const projects = document.getElementById("projects");
  const editedProject = Array.from(projects.children)
    .at(projectManager.projects.indexOf(project))
    .querySelector(".project-title");
  editedProject.textContent = `${project.title}`;
  editedProject.setAttribute("style", `background: ${project.colour}`);
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
    projectManager.deleteProject(e.target.parentNode);
    button.parentElement.remove();
  });
  return button;
}

import { projectManager } from "./project_manager";
import { projectModal } from "./project_modal";
import "material-icons/iconfont/round.css";
export {
  addAllProjects,
  addProjectUI,
  editProject,
  updateProject,
  updateProjectTitle,
  deleteProject,
};

function addAllProjects() {
  let projects = projectManager.getFromLocalStorage();
  for (const project of projects) {
    addProjectUI(project);
  }
}

function addProjectUI(newProject) {
  const projects = document.querySelector("#projects");
  const project = document.createElement("li");
  project.classList.add("project");

  const colour = document.createElement("p");
  colour.textContent = "•";
  colour.classList.add("project-colour");
  colour.setAttribute("style", `color: ${newProject._colour}`);

  const name = document.createElement("h3");
  name.textContent = `${newProject._title}`;
  name.classList.add("project-title");

  const projectSelector = document.createElement("button");
  projectSelector.classList.add("project-selector");

  projectSelector.addEventListener("click", (e) => {
    projectManager.setCurrentProject(e.currentTarget.parentElement);
  });

  const editButton = editProject();
  const deleteButton = deleteProject();

  const buttonSection = document.createElement("div");
  buttonSection.classList.add("project-button-section");

  projectSelector.append(colour, name);
  buttonSection.append(editButton, deleteButton);
  project.append(projectSelector, buttonSection);
  projects.appendChild(project);
  updateProjectTitle(project);
}

function editProject() {
  const button = document.createElement("button");
  button.classList.add("edit-project-button", "material-icons-round");
  button.textContent = "edit";
  button.addEventListener("click", (e) => {
    document.body.appendChild(
      projectModal(
        projectManager.projects[
          projectManager.findProject(
            e.currentTarget.parentElement.parentElement
          )
        ]
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
  editedProjectTitle.textContent = `${project._title}`;
  const editedProjectColour = Array.from(projects.children)
    .at(projectManager.projects.indexOf(project))
    .querySelector(".project-colour");
  editedProjectColour.setAttribute("style", `color: ${project._colour}`);
}

function updateProjectTitle(project) {
  const projectTitle = document.getElementById("main-title").firstChild;
  if (projectManager.getCurrentProject() != null) {
    projectTitle.textContent = `${project._title}`;
  } else if (projectManager.getCurrentProject() == null) {
    projectTitle.textContent = "No Project Selected!";
  }
}

function deleteProject() {
  const button = document.createElement("button");
  button.classList.add("delete-project-button", "material-icons-round");
  button.textContent = "delete_outline";
  button.addEventListener("click", (e) => {
    projectManager.deleteProject(e.currentTarget.parentElement.parentElement);
    button.parentElement.parentElement.remove();
  });
  return button;
}

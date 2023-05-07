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

  const nameSection = document.createElement("div");

  const editButton = editProject();
  const deleteButton = deleteProject();

  const buttonSection = document.createElement("div");
  buttonSection.classList.add("project-button-section");

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
  button.innerHTML = `<span class="material-icons-round">edit</span>`;
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
  if (project) {
    projectTitle.textContent = `${project._title}`;
  } else {
    projectTitle.textContent = "No Project Selected!";
  }
}

function deleteProject() {
  const button = document.createElement("button");
  button.classList.add("delete-project-button");
  button.innerHTML = `<span class="material-icons-round">delete_outline</span>`;
  button.addEventListener("click", (e) => {
    projectManager.deleteProject(e.currentTarget.parentElement.parentElement);
    button.parentElement.parentElement.remove();
  });
  return button;
}

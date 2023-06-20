import { addProjectUI, updateProject, updateProjectTitle } from "./project_ui";
import { addAllTodos } from "./todo_ui";
export { projectManager };

const projectManager = (function () {
  const projects = getProjectsFromLocalStorage();
  let currentProject;

  function findProject(project) {
    if (project instanceof HTMLElement) {
      const projects = document.querySelector("#projects");
      const index = Array.from(projects.children).indexOf(project);
      return index;
    } else if (typeof project == "number") {
      return project;
    }
  }

  function addProject(project) {
    projects.push(project);
    addProjectUI(project);
    setCurrentProject(projects.indexOf(project));
    localStorage.setItem("projects", JSON.stringify(projects));
  }

  function editProject(project, title, colour) {
    project.title = title;
    project.colour = colour;
    updateProject(project);
    updateProjectTitle(project);
    localStorage.setItem("projects", JSON.stringify(projects));
  }

  function deleteProject(project) {
    setCurrentProjectOnDelete(project);
    projects.splice(findProject(project), 1);
    localStorage.setItem("projects", JSON.stringify(projects));
  }

  function getCurrentProject() {
    return currentProject;
  }

  function setCurrentProject(project) {
    currentProject = projects[findProject(project)];
    updateProjectTitle(getCurrentProject());
    addAllTodos(getCurrentProject());
  }

  function setCurrentProjectOnDelete(project) {
    if (
      projects[findProject(project)] == projects[projects.length - 1] &&
      projects.length > 1
    ) {
      project.previousElementSibling.firstElementChild.click();
    } else if (projects.length > 1) {
      project.nextElementSibling.firstElementChild.click();
    } else {
      currentProject = null;
      updateProjectTitle(getCurrentProject());
      return;
    }
  }

  function getProjectsFromLocalStorage() {
    return JSON.parse(localStorage.getItem("projects") || "[]");
  }

  return {
    projects,
    findProject,
    addProject,
    editProject,
    deleteProject,
    setCurrentProject,
    getCurrentProject,
    getProjectsFromLocalStorage,
  };
})();

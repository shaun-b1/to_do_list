import { addProjectUI, updateProject, updateProjectTitle } from "./project_ui";
import { addAllTodos } from "./todo_ui";
export { projectManager };

const projectManager = (function () {
  const projects = getFromLocalStorage();
  let currentProject;

  function findProject(project) {
    const projects = document.querySelector("#projects");
    let index = Array.from(projects.children).indexOf(project);
    return index;
  }

  function addProject(project) {
    projects.push(project);
    currentProject = project;
    addProjectUI(project);
    updateProjectTitle(project);
    localStorage.setItem("projects", JSON.stringify(projects));
  }

  function editProject(project, title, colour) {
    project._title = title;
    project._colour = colour;
    updateProject(project);
    updateProjectTitle(project);
    localStorage.setItem("projects", JSON.stringify(projects));
  }

  function deleteProject(project) {
    currentProjectOnDelete(project);
    projects.splice(findProject(project), 1);
    localStorage.setItem("projects", JSON.stringify(projects));
  }

  function setCurrentProject(project) {
    currentProject = projects[findProject(project)];
    updateProjectTitle(getCurrentProject());
    addAllTodos(currentProject);
  }

  function getCurrentProject() {
    return currentProject;
  }

  function getFromLocalStorage() {
    return JSON.parse(localStorage.getItem("projects") || "[]");
  }

  function currentProjectOnDelete(project) {
    if (projects[findProject(project)] == projects[projects.length - 1]) {
      console.log(project.previousElementSibling.firstElementChild);
      project.previousElementSibling.firstElementChild.click();
    } else {
      console.log(project.nextElementSibling.firstElementChild);
      project.nextElementSibling.firstElementChild.click();
    }
  }

  return {
    projects,
    findProject,
    addProject,
    editProject,
    deleteProject,
    setCurrentProject,
    getCurrentProject,
    getFromLocalStorage,
  };
})();

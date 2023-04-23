/* eslint-disable no-unused-vars */
import { addProjectToAside, updateProjectInAside } from "./aside";

const projectManager = (function () {
  const projects = [];
  let currentProject;

  function findProject(project) {
    const projects = document.querySelector("#projects");
    const index = Array.from(projects.children).indexOf(project);
    return index;
  }

  function addProject(project) {
    projects.push(project);
    currentProject = project;
    addProjectToAside(project);
  }

  function editProject(project, title, colour) {
    project.title = title;
    project.colour = colour;
    updateProjectInAside(project);
  }

  function deleteProject(project) {
    projects.splice(findProject(project), 1);
  }

  function setCurrentProject(project) {
    currentProject = projects[findProject(project)];
  }

  return {
    projects,
    currentProject,
    findProject,
    addProject,
    editProject,
    deleteProject,
    setCurrentProject,
  };
})();

export { projectManager };

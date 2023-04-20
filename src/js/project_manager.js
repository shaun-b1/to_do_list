/* eslint-disable no-unused-vars */
import { addProjectToAside } from "./aside";
import { editProjectModal } from "./project_modal";

const projectManager = (function () {
  const projects = [];
  let currentProject;
  const elements = document.querySelector("#projects");

  function findProject(element) {
    const index = Array.from(elements.children).indexOf(element);
    console.log(index);
  }

  function addProject(project) {
    projects.push(project);
    currentProject = project;
    addProjectToAside(project);
  }

  function openProjectEditor(element) {
    // open the edit project modal
    editProjectModal();
    // find the index of target project
    // save the index for later use
    // "get" the name and colour of the project at the index in projects
  }

  function editProject(index, name, colour) {
    // "set" the name and colour of the project at the index in projects to the values in the modal
  }

  function deleteProject(element) {
    // find the index of the target project
    // splice the projects array at the index by one
  }

  return {
    projects,
    currentProject,
    findProject,
    addProject,
    openProjectEditor,
    editProject,
    deleteProject,
  };
})();

export { projectManager };

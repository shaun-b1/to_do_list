/* eslint-disable no-unused-vars */
const projectManager = (function () {
  const projects = [];
  let currentProject;

  function findProject(element) {
    // Makes an array of ul elements
    // Finds the index the clicked on element
    // returns the index
  }

  function addProject(project) {
    // adds new project to the projects array
    // sets new project as current project
    // runs the build project ui function
  }

  function openProjectEditor(element) {
    // open the edit project modal
    // find the index of target project
    // save the index for later use
    // "get" the name and colour of the project at the index in projects
  }

  function editProject(index) {
    // "set" the name and colour of the project at the index in projects to the values in the modal
  }

  function deleteProject(element) {
    // find the index of the target project
    // splice the projects array at the index by one
    // remove the li of the project from the ul
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

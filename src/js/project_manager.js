import { addProjectToAside, updateProjectInAside } from "./aside";
import { updateProjectTitle } from "./main";
export { projectManager };

const projectManager = (function () {
  const projects = [
    { title: "Home", colour: "orange", todos: [] },
    { title: "inbox", colour: "blue", todos: [] },
    { title: "random", colour: "yellow", todos: [] },
  ];
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
    updateProjectTitle(project);
  }

  function editProject(project, title, colour) {
    project.title = title;
    project.colour = colour;
    updateProjectInAside(project);
    updateProjectTitle(project);
  }

  function deleteProject(project) {
    projects.splice(findProject(project), 1);
  }

  function setCurrentProject(project) {
    currentProject = projects[findProject(project)];
    updateProjectTitle(currentProject);
  }

  function getCurrentProject() {
    return currentProject;
  }

  return {
    projects,
    findProject,
    addProject,
    editProject,
    deleteProject,
    setCurrentProject,
    getCurrentProject,
  };
})();

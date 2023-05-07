import { addProjectUI, updateProject, updateProjectTitle } from "./project_ui";
import { addAllTodos } from "./todo_ui";
export { projectManager };

const projectManager = (function () {
  const projects = getFromLocalStorage();
  // [
  //   {
  //     title: "Home",
  //     colour: "orange",
  //     todos: [
  //       {
  //         title: "Hello World",
  //         description: "This is a todo in the 'Home' project",
  //         dueDate: "2023-05-13",
  //         priority: "4",
  //         creationDate: 1683471038
  //       },
  //     ],
  //   },
  //   { title: "Inbox", colour: "blue", todos: [] },
  //   { title: "RaNdOm", colour: "yellow", todos: [] },
  // ];
  let currentProject;

  function findProject(project) {
    if (typeof project === "number") {
      let index = project;
      return index;
    } else {
      const projects = document.querySelector("#projects");
      let index = Array.from(projects.children).indexOf(project);
      return index;
    }
  }

  function addProject(project) {
    projects.push(project);
    currentProject = project;
    addProjectUI(project);
    updateProjectTitle(project);
    addAllTodos();
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
    projects.splice(findProject(project), 1);
    localStorage.setItem("projects", JSON.stringify(projects));
  }

  function setCurrentProject(project) {
    currentProject = projects[findProject(project)];
    updateProjectTitle(currentProject);
    addAllTodos();
  }

  function getCurrentProject() {
    return currentProject;
  }

  function getFromLocalStorage() {
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
    getFromLocalStorage,
  };
})();

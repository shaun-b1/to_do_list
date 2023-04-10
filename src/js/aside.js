import { projectModal } from "./project_modal";
import { Project } from "./project";

function aside(allProjects) {
  const title = document.createElement("div");
  title.classList.add("title");
  const titleText = document.createElement("h2");
  titleText.innerText = "Projects";

  const button = document.createElement("button");
  button.id = "add-project-button";
  button.setAttribute("type", "button");
  button.innerText = "Add a new project";

  const projects = document.createElement("ul");
  projects.id = "projects";

  const aside = document.createElement("aside");
  title.append(titleText, button);
  aside.append(title, projects);

  button.addEventListener("click", () => {
    document.body.appendChild(projectModal());

    const projectSubmit = document.getElementById("project-submit");
    projectSubmit.addEventListener("click", (e) => {
      e.preventDefault();
      const newProject = new Project(
        document.getElementById("title").value,
        document.getElementById("colour").value
      );
      allProjects.push(newProject);
      projects.appendChild(
        addProjectToAside(newProject.title, newProject.colour, allProjects)
      );
      projectSubmit.parentElement.parentElement.parentElement.remove();
      console.log(allProjects);
    });
  });

  return aside;
}

function addProjectToAside(title, colour, allProjects) {
  const project = document.createElement("li");
  project.classList.add("project");

  const name = document.createElement("h3");
  name.textContent = `${title}`;
  name.setAttribute("background-color", `${colour}`);

  const button = deleteProject(allProjects);

  project.append(name, button);
  return project;
}

function deleteProject(allProjects) {
  const button = document.createElement("button");
  button.classList.add("delete-project-button");
  button.textContent = "x";
  button.addEventListener("click", () => {
    allProjects.splice(allProjects.indexOf(this), 1);
    button.parentElement.remove();
  });
  return button;
}

export { aside };

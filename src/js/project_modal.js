import { Project } from "./project";
import { projectManager } from "./project_manager";
export { createProjectModal, editProjectModal };

const colourArray = {
  red: "Red",
  orange: "Orange",
  yellow: "Yellow",
  green: "Green",
  blue: "Blue",
  rebeccapurple: "Purple",
  grey: "Grey",
};

function createProjectModal() {
  const modal = document.createElement("section");
  modal.classList.add("modal");
  modal.id = "project-modal";

  const form = document.createElement("form");

  const title = document.createElement("input");
  title.setAttribute("type", "text");
  title.setAttribute("name", "title");
  title.setAttribute("placeholder", "New Project Title");
  const titleDiv = document.createElement("div");
  titleDiv.appendChild(title);

  const colour = document.createElement("select");
  colour.setAttribute("name", "colour");
  colour.options[0] = new Option("-- Select an option --", "");
  colour.options[0].setAttribute("disabled", "disabled");
  for (const index in colourArray) {
    colour.options[colour.options.length] = new Option(
      colourArray[index],
      index
    );
  }
  const colourDiv = document.createElement("div");
  colourDiv.appendChild(colour);

  const submit = document.createElement("button");
  submit.setAttribute("type", "submit");
  submit.textContent = "Click me!";
  submit.onclick = (e) => submitNewProject(e, modal);
  const submitDiv = document.createElement("div");
  submitDiv.appendChild(submit);

  form.append(titleDiv, colourDiv, submitDiv);
  modal.appendChild(form);

  return modal;
}

function editProjectModal(project) {
  const modal = document.createElement("section");
  modal.classList.add("modal");
  modal.id = "project-modal";

  const form = document.createElement("form");

  const title = document.createElement("input");
  title.setAttribute("type", "text");
  title.setAttribute("name", "title");
  title.setAttribute("value", `${project.title}`);
  const titleDiv = document.createElement("div");
  titleDiv.appendChild(title);

  const colour = document.createElement("select");
  colour.setAttribute("name", "colour");
  colour.options[0] = new Option("-- Select an option --", "");
  colour.options[0].setAttribute("disabled", "disabled");
  for (const index in colourArray) {
    colour.options[colour.options.length] = new Option(
      colourArray[index],
      index
    );
  }
  for (var i = 0; i < colour.options.length; i++) {
    if (colour.options[i].value == project.colour) {
      colour.options[i].selected = true;
    }
  }
  const colourDiv = document.createElement("div");
  colourDiv.appendChild(colour);

  const submit = document.createElement("button");
  submit.setAttribute("type", "submit");
  submit.textContent = "Click me!";
  submit.onclick = (e) => submitEditedProject(e, project, modal);
  const submitDiv = document.createElement("div");
  submitDiv.appendChild(submit);

  form.append(titleDiv, colourDiv, submitDiv);
  modal.appendChild(form);

  return modal;
}

function submitNewProject(e, modal) {
  e.preventDefault();
  const newProject = new Project(
    document.querySelector('[name="title"]').value,
    document.querySelector('[name="colour"]').value
  );
  projectManager.addProject(newProject);
  modal.remove();
}

function submitEditedProject(e, project, modal) {
  e.preventDefault();
  projectManager.editProject(
    project,
    document.querySelector('[name="title"]').value,
    document.querySelector('[name="colour"]').value
  );
  modal.remove();
}

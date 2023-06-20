import { Project } from "./project";
import { projectManager } from "./project_manager";
export { projectModal };

const colourArray = {
  red: "Red",
  orange: "Orange",
  yellow: "Yellow",
  green: "Green",
  blue: "Blue",
  rebeccapurple: "Purple",
  grey: "Grey",
};

function projectModal(project) {
  const dialog = document.createElement("dialog");
  dialog.id = "project-modal";

  const modalHeader = document.createElement("div");
  modalHeader.classList.add("modal-header");
  const headerContent = document.createElement("h3");
  if (project) {
    headerContent.textContent = "Edit Project";
  } else {
    headerContent.textContent = "New Project";
  }

  const form = document.createElement("form");

  const title = document.createElement("input");
  title.setAttribute("type", "text");
  title.setAttribute("name", "title");
  if (project) {
    title.setAttribute("value", `${project.title}`);
  } else {
    title.setAttribute("placeholder", "New Project Title");
  }
  title.required = true;
  title.addEventListener("invalid", () => {
    if (title.validity.valueMissing) {
      title.setCustomValidity("Please give your Project a name");
    } else {
      title.setCustomValidity("");
    }
  });

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
  if (project) {
    for (var i = 0; i < colour.options.length; i++) {
      if (colour.options[i].value == project.colour) {
        colour.options[i].selected = true;
      }
    }
  }

  const buttonSection = document.createElement("div");
  const close = document.createElement("button");
  close.setAttribute("type", "button");
  close.classList.add("close-button");
  close.textContent = "Close";
  close.addEventListener("click", () => {
    dialog.remove();
  });
  const submit = document.createElement("button");
  submit.setAttribute("type", "submit");
  submit.classList.add("submit-button");
  submit.textContent = "Add Project";

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (project) {
      submitEditedProject(e, project, dialog);
    } else {
      submitNewProject(e, dialog);
    }
  });

  buttonSection.append(close, submit);
  form.append(title, colour, buttonSection);
  modalHeader.appendChild(headerContent);
  dialog.append(modalHeader, form);

  return dialog;
}

function submitNewProject(e, dialog) {
  const newProject = new Project(
    document.querySelector('[name="title"]').value,
    document.querySelector('[name="colour"]').value
  );
  projectManager.addProject(newProject);
  dialog.remove();
}

function submitEditedProject(e, project, dialog) {
  projectManager.editProject(
    project,
    document.querySelector('[name="title"]').value,
    document.querySelector('[name="colour"]').value
  );
  dialog.remove();
}

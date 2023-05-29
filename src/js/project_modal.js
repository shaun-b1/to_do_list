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
  const modal = document.createElement("section");
  modal.classList.add("modal");
  modal.id = "project-modal";

  const formContainer = document.createElement("div");
  formContainer.classList.add("form-container");

  const modalHeader = document.createElement("div");
  modalHeader.classList.add("modal-header");
  const headerContent = document.createElement("h3");
  headerContent.textContent = "New Project";
  const closeModal = document.createElement("button");
  closeModal.classList.add("material-icons-round");
  closeModal.textContent = "error";
  closeModal.addEventListener("click", () => {
    modal.remove();
  });

  const form = document.createElement("form");

  const title = document.createElement("input");
  title.setAttribute("type", "text");
  title.setAttribute("name", "title");
  if (project) {
    title.setAttribute("value", `${project._title}`);
  } else {
    title.setAttribute("placeholder", "New Project Title");
  }
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
  if (project) {
    for (var i = 0; i < colour.options.length; i++) {
      if (colour.options[i].value == project._colour) {
        colour.options[i].selected = true;
      }
    }
  }
  const colourDiv = document.createElement("div");
  colourDiv.appendChild(colour);

  const submit = document.createElement("button");
  submit.setAttribute("type", "submit");
  submit.textContent = "Add Project";
  submit.addEventListener("click", (e) => {
    if (project) {
      submitEditedProject(e, project, modal);
    } else {
      submitNewProject(e, modal);
    }
  });
  const submitDiv = document.createElement("div");
  submitDiv.appendChild(submit);

  form.append(titleDiv, colourDiv, submitDiv);
  modalHeader.append(headerContent, closeModal);
  formContainer.append(modalHeader, form);
  modal.appendChild(formContainer);

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

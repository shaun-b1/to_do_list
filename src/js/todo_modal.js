import { todoManager } from "./todo_manager";
import { Todo } from "./todo";
export { toDoModal };

const todoPriority = {
  1: "Priority 1",
  2: "Priorty 2",
  3: "Priority 3",
  4: "Priority 4",
};

function toDoModal(todo) {
  const dialog = document.createElement("dialog");
  dialog.id = "todo-modal";

  const modalHeader = document.createElement("div");
  modalHeader.classList.add("modal-header");
  const headerContent = document.createElement("h3");
  headerContent.textContent = "New Todo";
  const closeModal = document.createElement("button");
  closeModal.classList.add("material-icons-round");
  closeModal.textContent = "error";
  closeModal.addEventListener("click", () => {
    dialog.remove();
  });

  const form = document.createElement("form");

  const title = document.createElement("input");
  title.setAttribute("type", "text");
  title.setAttribute("name", "title");
  title.setAttribute("required", "required");
  if (todo) {
    title.setAttribute("value", `${todo.title}`);
  } else {
    title.setAttribute("placeholder", "Task Name");
  }
  const titleDiv = document.createElement("div");
  titleDiv.appendChild(title);

  const description = document.createElement("input");
  description.setAttribute("type", "text");
  description.setAttribute("name", "description");
  if (todo) {
    description.setAttribute("value", `${todo.description}`);
  } else {
    description.setAttribute("placeholder", "Description");
  }
  const descriptionDiv = document.createElement("div");
  descriptionDiv.appendChild(description);

  const date = document.createElement("input");
  date.setAttribute("type", "date");
  date.setAttribute("name", "date");
  if (todo) {
    date.setAttribute("value", `${todo.dueDate}`);
  }
  const dateDiv = document.createElement("div");
  dateDiv.appendChild(date);

  const priority = document.createElement("select");
  priority.setAttribute("name", "priority");
  for (const index in todoPriority) {
    priority.options[priority.options.length] = new Option(
      todoPriority[index],
      index
    );
  }
  if (todo) {
    for (var i = 0; i < priority.options.length; i++) {
      if (priority.options[i].value == todo.priority) {
        priority.options[i].selected = true;
      }
    }
  } else {
    priority.options[3].selected = true;
  }
  const priorityDiv = document.createElement("div");
  priorityDiv.appendChild(priority);

  const submit = document.createElement("button");
  submit.setAttribute("type", "submit");
  submit.textContent = "Add Todo";
  const submitDiv = document.createElement("div");
  submitDiv.appendChild(submit);
  submit.addEventListener("click", (e) => {
    if (todo) {
      submitEditedTodo(e, todo, dialog);
    } else {
      submitNewTodo(e, dialog);
    }
  });

  form.append(titleDiv, descriptionDiv, dateDiv, priorityDiv, submitDiv);
  modalHeader.append(headerContent, closeModal);
  dialog.append(modalHeader, form);

  return dialog;
}

function submitNewTodo(e, modal) {
  e.preventDefault();
  const newTodo = new Todo(
    document.querySelector('[name="title"]').value,
    document.querySelector('[name="description"]').value,
    document.querySelector('[name="date"]').value,
    document.querySelector('[name="priority"]').value
  );
  todoManager.addTodo(newTodo);
  modal.remove();
}

function submitEditedTodo(e, todo, modal) {
  e.preventDefault();
  todoManager.editTodo(
    todo,
    document.querySelector('[name="title"]').value,
    document.querySelector('[name="description"]').value,
    document.querySelector('[name="date"]').value,
    document.querySelector('[name="priority"]').value
  );
  modal.remove();
}

import { todoManager } from "./todo_manager";
import { Todo } from "./todo";
export { toDoModal };

const todoPriority = {
  1: "Priority 1",
  2: "Priority 2",
  3: "Priority 3",
  4: "Priority 4",
};

function toDoModal(todo) {
  const dialog = document.createElement("dialog");
  dialog.id = "todo-modal";

  const modalHeader = document.createElement("div");
  modalHeader.classList.add("modal-header");
  const headerContent = document.createElement("h3");
  if (todo) {
    headerContent.textContent = "Edit Todo";
  } else {
    headerContent.textContent = "New Todo";
  }

  const form = document.createElement("form");

  const title = document.createElement("input");
  title.setAttribute("type", "text");
  title.setAttribute("name", "title");
  title.setAttribute("required", "required");
  title.addEventListener("invalid", () => {
    if (title.validity.valueMissing) {
      title.setCustomValidity("You need a todo to do!");
    } else {
      title.setCustomValidity("");
    }
  });
  if (todo) {
    title.setAttribute("value", `${todo.title}`);
  } else {
    title.setAttribute("placeholder", "Task Name");
  }

  const description = document.createElement("input");
  description.setAttribute("type", "text");
  description.setAttribute("name", "description");
  if (todo) {
    description.setAttribute("value", `${todo.description}`);
  } else {
    description.setAttribute("placeholder", "Description");
  }

  const date = document.createElement("input");
  date.setAttribute("type", "date");
  date.setAttribute("name", "date");
  date.setAttribute("required", "required");
  date.addEventListener("invalid", () => {
    if (date.validity.valueMissing) {
      date.setCustomValidity("Please input a valid date");
    } else {
      date.setCustomValidity("");
    }
  });
  if (todo) {
    date.setAttribute("value", `${todo.dueDate}`);
  }

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
  submit.textContent = "Add Todo";

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (todo) {
      submitEditedTodo(e, todo, dialog);
    } else {
      submitNewTodo(e, dialog);
    }
  });

  buttonSection.append(close, submit);
  form.append(title, description, date, priority, buttonSection);
  modalHeader.appendChild(headerContent);
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

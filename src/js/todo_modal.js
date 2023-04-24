import { todoManager } from "./todo_manager";
import { Todo } from "./todo";

export function toDoModal() {
  const modal = document.createElement("section");
  modal.classList.add("modal");
  modal.id = "todo-modal";

  const form = document.createElement("form");

  const title = document.createElement("input");
  title.setAttribute("type", "text");
  title.setAttribute("name", "title");
  title.setAttribute("placeholder", "New Todo Title");
  const titleDiv = document.createElement("div");
  titleDiv.appendChild(title);

  const description = document.createElement("input");
  description.setAttribute("type", "text");
  description.setAttribute("name", "description");
  description.setAttribute("placeholder", "New Todo Description");
  const descriptionDiv = document.createElement("div");
  descriptionDiv.appendChild(description);

  const date = document.createElement("input");
  date.setAttribute("type", "text");
  date.setAttribute("name", "date");
  date.setAttribute("placeholder", "New Todo Date");
  const dateDiv = document.createElement("div");
  dateDiv.appendChild(date);

  const priority = document.createElement("input");
  priority.setAttribute("type", "text");
  priority.setAttribute("name", "priority");
  priority.setAttribute("placeholder", "New Todo Priority");
  const priorityDiv = document.createElement("div");
  priorityDiv.appendChild(priority);

  const submit = document.createElement("button");
  submit.setAttribute("type", "submit");
  submit.innerText = "Click me!";
  const submitDiv = document.createElement("div");
  submitDiv.appendChild(submit);
  submit.addEventListener("click", (e) => submitNewTodo(e, modal));

  form.append(titleDiv, descriptionDiv, dateDiv, priorityDiv, submitDiv);
  modal.appendChild(form);
  document.body.appendChild(modal);
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

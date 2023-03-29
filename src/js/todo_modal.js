export default (function () {
  const addTodoButton = document.getElementById("add-todo-button");

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
  priority.setAttribute("placeholder", "New Todo Date");
  const priorityDiv = document.createElement("div");
  priorityDiv.appendChild(priority);

  const note = document.createElement("input");
  note.setAttribute("type", "text");
  note.setAttribute("name", "date");
  note.setAttribute("placeholder", "New Todo Date");
  const noteDiv = document.createElement("div");
  noteDiv.appendChild(note);

  const submit = document.createElement("button");
  submit.setAttribute("type", "submit");
  submit.innerText = "Click me!";
  const submitDiv = document.createElement("div");
  submitDiv.appendChild(submit);

  form.append(titleDiv, descriptionDiv, submitDiv);
  modal.appendChild(form);
  document.body.appendChild(modal);

  function prevent() {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  }

  submit.addEventListener("click", () => {
    prevent();
    modal.style.display = "none";
  });

  addTodoButton.addEventListener("click", () => {
    modal.style.display = "block";
  });
})();

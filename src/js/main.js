import { toDoModal } from "./todo_modal";

export { main, updateProjectTitle, footer };

function main() {
  const title = document.createElement("div");
  title.id = "main-title";
  const titleText = document.createElement("h2");
  titleText.innerHTML = "lol";

  const button = document.createElement("button");
  button.id = "add-todo-button";
  button.setAttribute("type", "button");
  button.innerText = "Click me!";
  button.addEventListener("click", () => {
    console.log(toDoModal());
  });

  const main = document.createElement("main");
  title.append(titleText, button);
  main.appendChild(title);

  return main;
}

function updateProjectTitle(project) {
  const projectTitle = document.getElementById("main-title").firstChild;
  if (project) {
    projectTitle.innerText = `${project.title}`;
  } else {
    projectTitle.innerText = "No Project Selected!";
  }
}

function footer() {
  const footer = document.createElement("footer");
  footer.innerText = "Hello there";

  return footer;
}

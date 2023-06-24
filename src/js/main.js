import { toDoModal } from "./todo_modal";
import { projectManager } from "./project_manager";
export { main, footer };

function main() {
  const title = document.createElement("div");
  title.id = "main-title";
  const titleText = document.createElement("h2");
  titleText.textContent = "Hi there";

  const button = document.createElement("button");
  button.id = "add-todo-button";
  button.setAttribute("type", "button");
  button.innerHTML =
    `<span class="material-icons-round"></span>` + "<p>Add todo</p>";
  button.addEventListener("click", () => {
    if (projectManager.getCurrentProject() == null) {
      const dialog = document.body.appendChild(warning());
      dialog.showModal();
    } else {
      const dialog = document.body.appendChild(toDoModal());
      dialog.showModal();
    }
  });

  const todos = document.createElement("ul");
  todos.id = "todos";

  const main = document.createElement("main");
  title.append(titleText, button);
  main.append(title, todos);

  return main;
}

function footer() {
  const footer = document.createElement("footer");
  footer.innerHTML = `<p>Made by <a href="https://github.com/shaun-b1">Shaun MacWilliam</a> in &#x1F1EC;&#x1F1E7;</p>`;

  return footer;
}

function warning() {
  const warningBox = document.createElement("dialog");
  warningBox.classList.add("warning-box");

  const text = document.createElement("p");
  text.textContent = "You need to select a Project to add a Todo to";

  const button = document.createElement("button");
  button.textContent = "Okay!";
  button.addEventListener("click", () => {
    warningBox.remove();
  });

  warningBox.append(text, button);
  return warningBox;
}

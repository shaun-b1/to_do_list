import { todoManager } from "./todo_manager";
import { toDoModal } from "./todo_modal";
export { main, footer };

function main() {
  const title = document.createElement("div");
  title.id = "main-title";
  const titleText = document.createElement("h2");
  titleText.textContent = "lol";

  const button = document.createElement("button");
  button.id = "add-todo-button";
  button.setAttribute("type", "button");
  button.textContent = "Add a new todo";
  button.addEventListener("click", () => {
    todoManager.findTodo();
    document.body.appendChild(toDoModal());
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

export function main() {
  const title = document.createElement("div");
  title.classList.add("title");
  const titleText = document.createElement("h2");
  titleText.innerText = "Hello there";

  const button = document.createElement("button");
  button.id = "add-todo-button";
  button.setAttribute("type", "button");
  button.innerText = "Click me!";

  const main = document.createElement("main");
  title.append(titleText, button);
  main.appendChild(title);

  return main;
}

export function footer() {
  const footer = document.createElement("footer");
  footer.innerText = "Hello there";

  return footer;
}

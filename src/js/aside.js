export function aside() {
  const title = document.createElement("div");
  title.classList.add("title");
  const titleText = document.createElement("h2");
  titleText.innerText = "Hello there";

  const button = document.createElement("button");
  button.id = "add-project-button";
  button.setAttribute("type", "button");
  button.innerText = "Click me!";

  const aside = document.createElement("aside");
  title.append(titleText, button);
  aside.appendChild(title);

  return aside;
}

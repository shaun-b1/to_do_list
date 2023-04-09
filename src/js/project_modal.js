export function projectModal() {
  const colourArray = {
    red: "Red",
    orange: "Orange",
    yellow: "Yellow",
    green: "Green",
    blue: "Blue",
    rebeccapurple: "Purple",
    grey: "Grey",
  };

  const modal = document.createElement("section");
  modal.classList.add("modal");
  modal.id = "project-modal";

  const form = document.createElement("form");

  const title = document.createElement("input");
  title.setAttribute("type", "text");
  title.setAttribute("name", "Title");
  title.id = "title";
  title.setAttribute("placeholder", "New Project Title");
  const titleDiv = document.createElement("div");
  titleDiv.appendChild(title);

  const colour = document.createElement("select");
  colour.setAttribute("name", "colour");
  colour.id = "colour";
  colour.options[0] = new Option("-- Select an option --", "");
  colour.options[0].setAttribute("disabled", "disabled");
  for (const index in colourArray) {
    colour.options[colour.options.length] = new Option(
      colourArray[index],
      index
    );
  }
  const colourDiv = document.createElement("div");
  colourDiv.appendChild(colour);

  const submit = document.createElement("button");
  submit.setAttribute("type", "submit");
  submit.innerText = "Click me!";
  submit.id = "project-submit";
  const submitDiv = document.createElement("div");
  submitDiv.appendChild(submit);

  form.append(titleDiv, colourDiv, submitDiv);
  modal.appendChild(form);

  return modal;
}

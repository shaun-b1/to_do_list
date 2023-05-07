import { projectModal } from "./project_modal";
import "material-icons/iconfont/round.css";
export { aside };

function aside() {
  const title = document.createElement("div");
  title.id = "aside-title";
  const titleText = document.createElement("h2");
  titleText.textContent = "Projects";

  const button = document.createElement("button");
  button.id = "add-project-button";
  button.setAttribute("type", "button");
  button.innerHTML =
    `<span class="material-icons-round"></span>` + "<p>Add project</p>";
  button.addEventListener("click", () => {
    document.body.appendChild(projectModal());
  });

  const projects = document.createElement("ul");
  projects.id = "projects";

  const aside = document.createElement("aside");
  title.append(titleText, button);
  aside.append(title, projects);

  return aside;
}

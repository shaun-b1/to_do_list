import "material-icons/iconfont/round.css";
export { header };

function header() {
  const header = document.createElement("header");

  const slider = document.createElement("button");
  slider.classList.add("material-icons-round");
  slider.textContent = "dehaze";

  slider.addEventListener("click", () => {
    toggleNav();
  });

  header.appendChild(slider);

  return header;
}

function toggleNav() {
  const navOpen = document.querySelector(".container");
  if (navOpen.classList.contains("closed-sidebar")) {
    open();
  } else {
    close();
  }
}

function open() {
  document.querySelector(".container").classList.remove("closed-sidebar");
}

function close() {
  document.querySelector(".container").classList.add("closed-sidebar");
}

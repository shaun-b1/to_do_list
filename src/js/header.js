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
  const navOpen = window.getComputedStyle(document.querySelector("main"));
  if (navOpen.getPropertyValue("grid-column") == "2 / 3") {
    close();
  } else {
    open();
  }
}

function open() {
  document.querySelector("aside").style.gridColumn = "1/2";
  document.querySelector("main").style.gridColumn = "2/3";
}

function close() {
  // document.querySelector('aside').style.display = "none"
  document.querySelector("aside").style.gridColumn = "0/0";
  document.querySelector("main").style.gridColumn = "1/3";
}

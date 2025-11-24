const menuContainer = document.getElementById("menu-container");
const closesCollapse = document.getElementById("closeBtn");
const desktopOpen = document.getElementById("overlayDesktopOpen");
const intoBarCloseMobile = document.getElementById("intoBarCloseMobile");

desktopOpen.addEventListener("click", (e) => {
  e.stopPropagation();
  menuContainer.classList.add("openMenuLeftSide");
  menuContainer.classList.toggle("close");
  closesCollapse.classList.toggle("close");
});

intoBarCloseMobile.addEventListener("click", () => {
  console.log("salam");
  menuContainer.classList.remove("openMenuLeftSide");
  menuContainer.classList.remove("close");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 650) {
    // menuContainer.classList.remove("close");
    menuContainer.classList.remove("openMenuLeftSide");
  } else {
    menuContainer.classList.remove("close");
    closesCollapse.classList.remove("close");
  }
});

const menuContainer = document.getElementById("menu-container");
const desktopOpen = document.getElementById("overlayDesktopOpen");
const intoBarCloseMobile = document.getElementById("intoBarCloseMobile");
let currentWidth = window.innerWidth;

desktopOpen.addEventListener("click", (e) => {
  e.stopPropagation();
  if (currentWidth > 650) {
    menuContainer.classList.add("openMenuLeftSide");
    menuContainer.classList.toggle("close");
  } else {
    menuContainer.classList.add("openMenuLeftSide");
    menuContainer.classList.add("close");
    desktopOpen.classList.add("noned");
  }
});

intoBarCloseMobile.addEventListener("click", () => {
  menuContainer.classList.remove("openMenuLeftSide");
  menuContainer.classList.remove("close");
  desktopOpen.classList.remove("noned");
});

window.addEventListener("resize", () => {
  if (window.innerWidth !== currentWidth) {
    currentWidth = window.innerWidth;

    if (currentWidth > 650) {
      menuContainer.classList.remove("openMenuLeftSide");
    } else {
      menuContainer.classList.remove("close");
      if (closesCollapse) closesCollapse.classList.remove("close");
    }
  }
});

document.addEventListener("click", (e) => {
  if (
    window.innerWidth <= 650 &&
    menuContainer.classList.contains("openMenuLeftSide")
  ) {
    if (!menuContainer.contains(e.target) && e.target !== desktopOpen) {
      menuContainer.classList.remove("openMenuLeftSide");
      desktopOpen.classList.remove("noned");
    }
  }
});

const menuContainer = document.getElementById("menu-container");
// const closesCollapse = document.getElementById("closeBtn");
const desktopOpen = document.getElementById("overlayDesktopOpen");
const intoBarCloseMobile = document.getElementById("intoBarCloseMobile");
let currentWidth = window.innerWidth;

desktopOpen.addEventListener("click", (e) => {
  e.stopPropagation();
  menuContainer.classList.add("openMenuLeftSide");
  menuContainer.classList.toggle("close");
});

intoBarCloseMobile.addEventListener("click", () => {
  menuContainer.classList.remove("openMenuLeftSide");
  menuContainer.classList.remove("close");
});



window.addEventListener("resize", () => {
  if (window.innerWidth > 650) {
    menuContainer.classList.remove("openMenuLeftSide");
  }
});

document.addEventListener("click", (e) => {
  console.log("salam-1");

  if (window.innerWidth <= 650 && menuContainer.classList.contains("openMenuLeftSide")) {
    console.log("salam-2");
    if (!menuContainer.contains(e.target) && e.target !== desktopOpen) {
      menuContainer.classList.remove("openMenuLeftSide");
      console.log("menu bağlandı");
    }
  }
});

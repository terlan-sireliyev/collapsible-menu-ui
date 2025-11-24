const menuContainer = document.getElementById("menu-container");
const desktopOpen = document.getElementById("overlayDesktopOpen");
const intoBarCloseMobile = document.getElementById("intoBarCloseMobile");
let currentWidth = window.innerWidth;

desktopOpen.addEventListener("click", (e) => {
  e.stopPropagation();
  if (currentWidth > 650) {
    menuContainer.classList.add("openMenuLeftSide");
    menuContainer.classList.toggle("close");
  }else{
    menuContainer.classList.add("openMenuLeftSide");
    menuContainer.classList.add("close");
  }
  
});

intoBarCloseMobile.addEventListener("click", () => {
  menuContainer.classList.remove("openMenuLeftSide");
  menuContainer.classList.remove("close");
});

window.addEventListener("resize", () => {
  if (window.innerWidth !== currentWidth) {
    currentWidth = window.innerWidth;

    if (currentWidth > 650) {
      // Desktop: remove mobile classes
      menuContainer.classList.remove("openMenuLeftSide");
    } else {
      // Mobile: remove desktop classes
      menuContainer.classList.remove("close");
      if (closesCollapse) closesCollapse.classList.remove("close");
    }
  }
});

document.addEventListener("click", (e) => {
  console.log("salam-1");

  if (
    window.innerWidth <= 650 &&
    menuContainer.classList.contains("openMenuLeftSide")
  ) {
    console.log("salam-2");
    if (!menuContainer.contains(e.target) && e.target !== desktopOpen) {
      menuContainer.classList.remove("openMenuLeftSide");
      console.log("menu bağlandı");
    }
  }
});

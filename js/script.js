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
  menuContainer.classList.remove("openMenuLeftSide");
  menuContainer.classList.remove("close");
});

// Resize event - only act if width actually changes
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

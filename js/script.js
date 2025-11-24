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

// Resize event
window.addEventListener("resize", () => {
  if (window.innerWidth > 650) {
    // Desktop: mobil class-ları sil
    menuContainer.classList.remove("openMenuLeftSide");
  } else {
    // Mobil: desktop class-ları sil
    menuContainer.classList.remove("close");
    if (closesCollapse) closesCollapse.classList.remove("close");
  }
});

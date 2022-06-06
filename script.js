const toggleMenuButton = document.getElementById("toggle-menu-button");

toggleMenuButton.addEventListener("click", event => {
  const navbarLinks = document.getElementById("navbar-links");
  navbarLinks.classList.toggle("active");
});

window.addEventListener("resize", event => {
  const navbarLinks = document.getElementById("navbar-links");
  if (window.innerWidth >= 800) {
    navbarLinks.style.transition = "none";
    navbarLinks.classList.remove("active");
  } else {
    navbarLinks.style.transition = "transform 1s";
  }
});

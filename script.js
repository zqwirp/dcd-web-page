const toggleMenuButton = document.getElementById("toggle-menu-button");

toggleMenuButton.addEventListener("click", event => {
  const navbarLinks = document.getElementById("navbar-links");

  navbarLinks.classList.toggle("active");
});

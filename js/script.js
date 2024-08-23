document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("nav ul");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
  } else {
    console.error("Menu toggle or navigation menu not found");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // ... your existing code ...

  // Initialize the map
  const mapElement = document.querySelector("gmp-map");
  if (mapElement) {
    mapElement.addEventListener("gmp-map-initialized", () => {
      console.log("Map initialized");
      // You can add markers or do other map operations here
    });
  } else {
    console.error("Map element not found");
  }
});

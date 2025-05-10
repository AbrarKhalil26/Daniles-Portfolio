var typed = new Typed("#element", {
  strings: ["Larry Daniels", "Developer", "Designer"],
  typeSpeed: 40,
  backSpeed: 40,
  loop: true,
});

// Navbar -------------------------------------->
const box = document.getElementById("navId");
const changePoint = window.innerHeight - 70; // 100vh minus 30px

window.addEventListener("scroll", () => {
  if (window.scrollY > changePoint) {
    box.classList.remove("fixed-top");
    box.classList.add("nav-scroll");
  } else {
    box.classList.remove("nav-scroll");
    box.classList.add("fixed-top");
  }
});

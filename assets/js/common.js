const nav = document.querySelector(".h-nav");
const header = document.querySelector("header");
const menu = document.querySelector("#menu");
const moon = document.querySelector(".fa-moon");
window.addEventListener("scroll", function () {
  if (scrollY > 0) {
    header.classList.add("header-scroll");
  } else {
    header.classList.remove("header-scroll");
  }
});

menu.addEventListener("click", function () {
  nav.classList.toggle("show");
  this.classList.contains("fa-bars")
    ? (this.classList = "fa-solid fa-bars")
    : (this.classList = "fa-solid fa-xmark");
});

moon.addEventListener("click", function () {
    console.log("fgsdf");
  localStorage.getItem("dark-mode") === "true"
    ? localStorage.setItem("dark-mode", false)
    : localStorage.setItem("dark-mode", true);
});

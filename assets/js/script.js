// loading page
let spinner = document.getElementById("spinner");
let body = document.body;
body.onload = function () {
  body.style.overflow = "hidden";
  setTimeout(() => {
    body.style.overflow = "auto";
    spinner.style.display = "none";
  }, 1000);
};
// button
let button = document.getElementById("back-to-top");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 100) {
    button.style.display = "flex";
  } else {
    button.style.display = "none";
  }
};
button.onclick = function () {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
function scrollWin() {
  window.scrollTo(0, 500);
}
// Nav Link Color
var NavbarLinks = document.querySelectorAll(".navbar-nav .nav-item .nav-link");

NavbarLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    NavbarLinks.forEach((link) => {
      link.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});

var accordionButton = document.querySelectorAll(".accordion-button");
var accordionPanel = document.querySelectorAll(".accordion-item");

accordionButton.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    accordionPanel.forEach((acc) => {
      acc.classList.remove("accordion-item-border");
      acc.classList.remove("accordion-item-border");
    });
    btn.parentElement.parentElement.classList.add("accordion-item-border");
  });
});

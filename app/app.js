// connection javascript to the actual html elements
const hamburgerMenu = document.querySelector(".hamburger-menu");

const nav = document.querySelector(".nav");

hamburgerMenu.addEventListener("click", () => {
  nav.classList.toggle("active");
  console.log("active");
});

function initlisteners() {
  $(".nav a").on("click", function (e) {
    let id = e.currentTarget.id;
    console.log(id);
    $("#app").html(id);
    nav.classList.toggle("active");
  });

  $(".nav").on("click", function (e) {
    nav.classList.remove("active");
  });
}

$(document).ready(function () {
  initlisteners();
});

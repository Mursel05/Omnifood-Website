const menyu = document.querySelector(".menyu");
const xBtn = document.querySelector(".x-btn");
const navbar = document.querySelector(".navbar-gizli");

menyu.addEventListener("click", function () {
  navbar.classList.toggle("hidden");
  menyu.classList.toggle("hidden");
});

xBtn.addEventListener("click", function () {
  navbar.classList.toggle("hidden");
  menyu.classList.toggle("hidden");
});

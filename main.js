let navigation = document.querySelector(".navigation");
let menuToggle = document.querySelector(".menu-toggle");
let username = document.querySelector(".name");
menuToggle.addEventListener("click", function () {
  navigation.classList.toggle("active");
  setTimeout(() => {
    getComputedStyle(username).display === "none"
      ? (username.style.display = "block")
      : "";
  }, 1500);
  setTimeout(() => {
    getComputedStyle(username).display === "block"
      ? (username.style.display = "none")
      : "";
  }, 0);
});

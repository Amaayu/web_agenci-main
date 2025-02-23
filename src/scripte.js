// JavaScript to toggle mobile menu
document.getElementById("navbar").addEventListener("click", function () {
  document.getElementById("mobile-menu").classList.toggle("hidden");
});

document.getElementById("close-menu").addEventListener("click", function () {
  document.getElementById("mobile-menu").classList.add("hidden");
});

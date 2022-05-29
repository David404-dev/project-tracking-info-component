const hamburgerIcon = document.querySelector(".hamburger-icon");
const closeIcon = document.querySelector(".close-icon");
const mobileLinks = document.querySelector(".mobile-links");

hamburgerIcon.addEventListener("click", () => {
  hamburgerIcon.style.display = "none";
  closeIcon.style.display = "block";
  mobileLinks.style.display = "block";
});

closeIcon.addEventListener("click", () => {
  closeIcon.style.display = "none";
  hamburgerIcon.style.display = "block";
  mobileLinks.style.display = "none";
});

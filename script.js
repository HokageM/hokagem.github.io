const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

// Subtle system-label typing effect
const label = document.querySelector(".system-label");
const originalText = label.textContent;
let index = 0;

function typeLabel() {
  label.textContent = originalText.slice(0, index);
  index += 1;

  if (index <= originalText.length) {
    setTimeout(typeLabel, 38);
  }
}

typeLabel();

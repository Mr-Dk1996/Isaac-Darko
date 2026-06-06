const hamburgerBtn = document.getElementById("hamburgerBtn");
const navLinks = document.getElementById("navLinks");
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (hamburgerBtn && navLinks) {
  hamburgerBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    hamburgerBtn.classList.toggle("open", isOpen);
    hamburgerBtn.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      hamburgerBtn.classList.remove("open");
      hamburgerBtn.setAttribute("aria-expanded", "false");
    });
  });
}

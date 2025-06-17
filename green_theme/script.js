// Dark mode toggle
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
}

// Accordion behavior
const allDetails = document.querySelectorAll("details");
allDetails.forEach((d) => {
  const icon = d.querySelector(".icon");
  d.addEventListener("toggle", () => {
    icon.textContent = d.open ? "➖" : "➕";
    if (d.open) {
      allDetails.forEach((other) => {
        if (other !== d) other.removeAttribute("open");
      });
    }
  });
});

// Back to Top
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
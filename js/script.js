// Reveal animations on scroll
const faders = document.querySelectorAll(".fade-in");

const appearOnScroll = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.2 }
);

faders.forEach((fade) => appearOnScroll.observe(fade));

// Copy email to clipboard
const emailItem = document.querySelector(".copy-email");
const feedback = document.getElementById("copy-feedback");

if (emailItem) {
  emailItem.addEventListener("click", () => {
    const email = emailItem.dataset.email;
    navigator.clipboard.writeText(email).then(() => {
      feedback.classList.add("show");
      setTimeout(() => feedback.classList.remove("show"), 2000);
    });
  });
}

// Scroll to top when logo is clicked
const logo = document.querySelector(".logo");
if (logo) {
  logo.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Smooth scroll for nav links
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60, // offset for navbar height
        behavior: "smooth",
      });
    }
  });
});

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active"); // animate hamburger to X
  });

  // Close menu when a link is clicked
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });
}

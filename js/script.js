// Scroll animations
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

// Smooth scroll for nav links
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);
    if (target) {
      window.scrollTo({ top: target.offsetTop - 60, behavior: "smooth" });
    }
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.remove("active");
    document.querySelector(".hamburger").classList.remove("active");
  });
});

// Hamburger menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
  });
}
// Typewriter animation for About Me
function typeWriter(element, text, delay = 30) {
  let index = 0;
  element.textContent = ""; // clear existing content
  function type() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(type, delay);
    } else {
      element.style.borderRight = "none"; // remove cursor after typing
    }
  }
  type();
}

const aboutBox = document.querySelector(".about-box");
if (aboutBox) {
  aboutBox.dataset.text =
    "UI/UX Designer & Frontend Developer with a growing focus on UI/UX. Skilled in front-end development and crafting responsive, user-friendly websites with clean and thoughtful design.";
  const aboutObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          typeWriter(aboutBox, aboutBox.dataset.text, 30);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  aboutObserver.observe(aboutBox);
}

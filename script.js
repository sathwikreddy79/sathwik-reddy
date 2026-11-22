const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Reveal sections smoothly as they enter the screen.
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(item => revealObserver.observe(item));

// Highlight the current navigation section.
const sections = document.querySelectorAll("main section[id]");
const navItems = document.querySelectorAll(".nav-link");
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navItems.forEach(item => {
        item.classList.toggle("active", item.getAttribute("href") === `#${entry.target.id}`);
      });
    }
  });
}, { rootMargin: "-35% 0px -55% 0px" });
sections.forEach(section => sectionObserver.observe(section));

// Copy the email address.
document.getElementById("copyEmail").addEventListener("click", async () => {
  const email = "sathwikreddy2017@gmail.com";
  const button = document.getElementById("copyEmail");
  try {
    await navigator.clipboard.writeText(email);
    button.textContent = "Email copied!";
  } catch {
    button.textContent = email;
  }
  setTimeout(() => button.textContent = "Copy email address", 2200);
});

document.getElementById("year").textContent = new Date().getFullYear();

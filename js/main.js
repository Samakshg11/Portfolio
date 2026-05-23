document.addEventListener("DOMContentLoaded", () => {
  const backToTop = document.getElementById("backToTop");
  const navbar = document.querySelector(".navbar");

  const setActiveNavLink = () => {
    const links = document.querySelectorAll(".nav-links a");
    if (!links.length) return;

    let current = window.location.pathname.split("/").pop() || "index.html";
    current = current.toLowerCase();
    if (current === "home.html") current = "index.html";

    links.forEach((link) => {
      const href = link.getAttribute("href") || "";
      const normalizedHref = href.split("#")[0].split("?")[0].toLowerCase();
      const isActive = normalizedHref === current;
      link.classList.toggle("active", isActive);
      if (isActive) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
  };

  const toggleNavbarState = () => {
    if (!navbar) return;
    navbar.classList.toggle("scrolled", window.scrollY > 24);
  };

  setActiveNavLink();
  toggleNavbarState();
  window.addEventListener("scroll", toggleNavbarState, { passive: true });

  if (backToTop) {
    const toggleBackToTop = () => {
      const isVisible = window.scrollY > 200;
      backToTop.hidden = !isVisible;
      backToTop.setAttribute("aria-hidden", String(!isVisible));
    };

    toggleBackToTop();
    window.addEventListener("scroll", toggleBackToTop, { passive: true });

    backToTop.addEventListener("click", () => {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
    });
  }

  document.querySelectorAll("[data-current-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
});

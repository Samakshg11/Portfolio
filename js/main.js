document.addEventListener("DOMContentLoaded", () => {
  const backToTop = document.getElementById("backToTop");

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

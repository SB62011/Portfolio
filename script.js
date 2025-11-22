document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("nav-toggle");
  const navClose = document.getElementById("nav-close");
  const mobileMenu = document.getElementById("mobile-menu");
  const yearSpan = document.getElementById("year");
  const header = document.querySelector("header");

  navToggle?.addEventListener("click", () =>
    mobileMenu?.classList.remove("translate-y-full")
  );
  navClose?.addEventListener("click", () =>
    mobileMenu?.classList.add("translate-y-full")
  );
  mobileMenu
    ?.querySelectorAll("a")
    .forEach((l) =>
      l.addEventListener("click", () =>
        mobileMenu?.classList.add("translate-y-full")
      )
    );
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  window.addEventListener("scroll", () => {
    if (!header) return;
    if (window.scrollY > 50)
      header.classList.add("bg-surface/95", "border-b", "border-muted");
    else header.classList.remove("bg-surface/95", "border-b", "border-muted");
  });
});

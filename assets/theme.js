document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const menu = document.querySelector("[data-menu]");

  if (menuToggle && menu) {
    menuToggle.addEventListener("click", () => {
      const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";

      menuToggle.setAttribute("aria-expanded", String(!isExpanded));
      menu.hidden = isExpanded;
    });
  }

  document.querySelectorAll('form[action*="/cart/add"]').forEach((form) => {
    form.addEventListener("submit", () => {
      const submitButton = form.querySelector('[type="submit"]');

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.setAttribute("aria-busy", "true");
      }
    });
  });

  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  const currentUrl = new URL(window.location.href);
  const navLinks = document.querySelectorAll('.site-header nav a');

  navLinks.forEach((link) => {
    const linkUrl = new URL(link.href, window.location.origin);
    if (linkUrl.pathname === currentUrl.pathname && link.getAttribute('href') !== '#contact') {
      link.setAttribute('aria-current', 'page');
    }
  });
});

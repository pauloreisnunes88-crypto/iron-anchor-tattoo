
document.addEventListener("DOMContentLoaded", () => {
  // Mobile navigation and storefront enhancements.
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const menu = document.querySelector("[data-menu]");

  if (menuToggle && menu) {
    menuToggle.addEventListener("click", () => {
      const isExpanded =
        menuToggle.getAttribute("aria-expanded") === "true";

      menuToggle.setAttribute("aria-expanded", String(!isExpanded));
      menu.hidden = isExpanded;
    });
  }

  // Prevent accidental repeat clicks on add-to-cart forms.
  document.querySelectorAll('form[action*="/cart/add"]').forEach((form) => {
    form.addEventListener("submit", () => {
      const submitButton = form.querySelector('[type="submit"]');

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.setAttribute("aria-busy", "true");
      }
    });
  });

  // Update the current year in elements that request it.
  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });
});

/* =========================================================
   DONATION LINKS — paste your Zeffy (or Givebutter) links here.
   Leave a link empty ("") and its buttons will send people to
   the Contact page instead, so nothing ever looks broken.
   ========================================================= */
const DONATE_LINKS = {
  general: "",     // main donation form (one-time + monthly)
  wheelchair: "",  // "A new wheelchair for a Minneapolis child"
  laptops: "",     // "Back-to-school laptops for 20 students"
  housing: ""      // "Emergency housing fund for Twin Cities families"
};

document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.textContent = open ? "Close" : "Menu";
    });
  }

  // Donation buttons
  document.querySelectorAll("[data-donate]").forEach(function (el) {
    var link = DONATE_LINKS[el.getAttribute("data-donate")];
    if (link) {
      el.setAttribute("href", link);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    } else if (el.hasAttribute("data-fallback")) {
      el.setAttribute("href", el.getAttribute("data-fallback"));
    }
  });

  // Current year in footer
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
});

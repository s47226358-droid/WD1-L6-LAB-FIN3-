/* STEPHANIE G. CALIBOSO - DEVELOPER PORTFOLIO Custom external JavaScript */

document.addEventListener("DOMContentLoaded", function () {
  // Update the footer year automatically.
  const yearElement = document.getElementById("currentYear");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Add a subtle shadow to the navigation after scrolling.
  const navbar = document.querySelector(".portfolio-navbar");
  const updateNavbar = function () {
    if (window.scrollY > 30) {
      navbar.classList.add("navbar-scrolled");
    } else {
      navbar.classList.remove("navbar-scrolled");
    }
  };

  updateNavbar();
  window.addEventListener("scroll", updateNavbar);

  // Close the mobile navigation after a navigation link is selected.
  const navLinks = document.querySelectorAll(".portfolio-navbar .nav-link, .portfolio-navbar .btn-nav");
  const navbarCollapse = document.getElementById("navbarContent");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.innerWidth < 992 && navbarCollapse.classList.contains("show")) {
        const collapseInstance = bootstrap.Collapse.getOrCreateInstance(navbarCollapse);
        collapseInstance.hide();
      }
    });
  });

  // Enable Bootstrap scroll spy so the active section is reflected in navigation.
  const pageBody = document.body;
  if (window.bootstrap && bootstrap.ScrollSpy) {
    bootstrap.ScrollSpy.getOrCreateInstance(pageBody, {
      target: "#mainNavbar",
      offset: 100
    });
  }

  // Add a gentle entrance animation when sections enter the viewport.
  const animatedItems = document.querySelectorAll(
    ".section-heading, .about-art, .motto-card, .philosophy-card, .palette-note, .project-card, .contact-card"
  );

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    animatedItems.forEach(function (item) {
      item.classList.add("reveal");
      revealObserver.observe(item);
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scroll to Top
    document.querySelector(".scroll-to-top").addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Hamburger Menu Toggle
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navTabs = document.querySelector('.nav-tabs');

    hamburgerMenu.addEventListener('click', () => {
        navTabs.classList.toggle('active');
    });
});
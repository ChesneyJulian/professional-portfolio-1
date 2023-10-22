
const initializeApp = () => {
  console.log('initialized');
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const mobileNav = document.getElementById("mobile-nav");

  const toggleMobileMenu = () => {
    console.log(mobileNav.classList);
    mobileNav.classList.toggle("hidden");
  }

  hamburgerBtn.addEventListener('click', toggleMobileMenu);
}



document.addEventListener("DOMContentLoaded", initializeApp());
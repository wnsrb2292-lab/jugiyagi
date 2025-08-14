document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById('menuToggle');
  const slide_menu = document.querySelector('.slide_menu');
  const closeMenu = document.getElementById('closeMenu');
  const overlay = document.getElementById('menuOverlay');

  function openMenu() {
    slide_menu.classList.add('open');
    overlay.classList.add('show');
  }

  function closeSideMenu() {
    slide_menu.classList.remove('open');
    overlay.classList.remove('show');
  }

  menuToggle.addEventListener('click', openMenu);
  closeMenu.addEventListener('click', closeSideMenu);
  overlay.addEventListener('click', closeSideMenu); 

});
let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 80) {
    // Scroll hacia abajo → ocultar
    navbar.classList.add('hide');
  } else {
    // Scroll hacia arriba → mostrar
    navbar.classList.remove('hide');
  }

  lastScrollY = currentScrollY;
});

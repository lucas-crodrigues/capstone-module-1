const body = document.querySelector('.body');
const hamburguer = document.querySelector('.hamburguerIcon');
const mobilemenu = document.querySelector('.mobilemenu');
const closeMenu = document.querySelector('.closeMenu');

hamburguer.addEventListener('click', () => {
  body.classList.add('lockScroll');
  mobilemenu.classList.remove('hide');
})

closeMenu.addEventListener('click', () => {
  body.classList.remove('lockScroll');
  mobilemenu.classList.add('hide');
})
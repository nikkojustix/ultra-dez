import * as flsFunctions from './modules/functions.js';
import IMask from 'imask';
import FsLightbox from 'fslightbox';

flsFunctions.isWebp();

// sticky header
const sticky = document.querySelector('.header__sticky');
const stickyOffset =
  window.innerWidth >= 992 ? 300 : sticky.getBoundingClientRect().top - 15;
window.addEventListener('scroll', () => {
  if (window.pageYOffset > stickyOffset) {
    sticky.classList.add('header__sticky--visible');
  } else {
    sticky.classList.remove('header__sticky--visible');
  }
});

// modal
flsFunctions.bindModal(
  '.header__links-btn',
  '#modal-callback',
  '#modal-callback .modal__close'
);
flsFunctions.bindModal(
  '.header__sticky-btn',
  '#modal-callback',
  '#modal-callback .modal__close'
);
// flsFunctions.bindModal(
//   '.banner__btn',
//   '#modal-request',
//   '#modal-request .modal__close'
// );

// phone mask
const element = document.querySelector('.form__input--phone');
const maskOptions = {
  mask: '+{7}(000)000-00-00',
};
const mask = IMask(element, maskOptions);

// accordion
flsFunctions.accordion();

// get current year
document.querySelector('.current-year').innerHTML = new Date().getFullYear();

// mobile menu
const menuBtn = document.querySelector('.menu__btn');
menuBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const menu = document.querySelector('.menu');
  const menuList = document.querySelector('.menu__list');
  menu.classList.add('menu--opened');
  menuList.style.transform = 'translateX(0)';

  menu.addEventListener('click', (e) => {
    if (e.target === menu) {
      menuList.style.transform = 'translateX(-100%)';
      menu.classList.remove('menu--opened');
    }
  });
});

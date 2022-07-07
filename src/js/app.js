import * as flsFunctions from './modules/functions.js';
import IMask from 'imask';
import FsLightbox from 'fslightbox';

flsFunctions.isWebp();

// sticky header
const sticky = document.querySelector('.header__sticky');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    console.log(window.pageYOffset);
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
flsFunctions.bindModal(
  '.banner__btn',
  '#modal-request',
  '#modal-request .modal__close'
);

// phone mask
const element = document.querySelector('.form__input--phone');
const maskOptions = {
  mask: '+{7}(000)000-00-00',
};
const mask = IMask(element, maskOptions);

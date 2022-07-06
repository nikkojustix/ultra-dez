import * as flsFunctions from './modules/functions.js';
import IMask from 'imask';

flsFunctions.isWebp();

const sticky = document.querySelector('.header__sticky');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    console.log(window.pageYOffset);
    sticky.classList.add('header__sticky--visible');
  } else {
    sticky.classList.remove('header__sticky--visible');
  }
});

// const modal = new GraphModal();

flsFunctions.bindModal('.header__links-btn', '.modal', '.modal__close');
flsFunctions.bindModal('.header__sticky-btn', '.modal', '.modal__close');

const element = document.querySelector('.form__input--phone');
const maskOptions = {
  mask: '+{7}(000)000-00-00',
};
const mask = IMask(element, maskOptions);

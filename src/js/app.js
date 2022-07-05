import * as flsFunctions from './modules/functions.js';

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

const modal = new GraphModal();

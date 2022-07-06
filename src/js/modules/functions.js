export function isWebp() {
  function testWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src =
      'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  }

  testWebP(function (support) {
    let className = support == true ? 'webp' : 'no-webp';
    document.querySelector('html').classList.add(className);
  });
}

// modal
export function bindModal(trigger, modal, close) {
  trigger = document.querySelector(trigger);
  modal = document.querySelector(modal);
  close = document.querySelector(close);

  const body = document.body;
  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'flex';
    body.classList.add('locked');
  });
  close.addEventListener('click', () => {
    modal.style.display = 'none';
    body.classList.remove('locked');
  });
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      body.classList.remove('locked');
    }
  });
}

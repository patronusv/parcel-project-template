(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    logo: document.querySelector('[data-logo]'),
    menuNavLink: [...document.querySelectorAll('[data-menu-link]')]
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.menuNavLink.forEach(e => {
    e.addEventListener('click', toggleModal);
  })
  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle('is-hidden');
    refs.logo.classList.toggle('menu-open');
  }
})();
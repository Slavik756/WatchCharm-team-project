const menu = document.querySelector('.mob-menu');
const openButton = document.querySelector('.button-menu-open');
const closeButton = document.querySelector('.button-menu-close');
const desktop = window.matchMedia('(min-width: 1280px)');

if (menu && openButton && closeButton) {
  let previousOverflow = '';

  openButton.addEventListener('click', () => {
    if (menu.open || desktop.matches) return;

    previousOverflow = document.documentElement.style.overflow;
    menu.classList.add('is-open');
    menu.showModal();
    openButton.setAttribute('aria-expanded', 'true');
    document.documentElement.style.overflow = 'hidden';
  });

  // A native dialog handles Escape, focus containment and the inert background.
  menu.addEventListener('close', () => {
    menu.classList.remove('is-open');
    openButton.setAttribute('aria-expanded', 'false');
    document.documentElement.style.overflow = previousOverflow;
    const focusTarget = desktop.matches
      ? document.querySelector('.header-logo')
      : openButton;
    focusTarget?.focus({ preventScroll: true });
  });

  closeButton.addEventListener('click', () => menu.close());

  menu.addEventListener('click', event => {
    if (event.target.closest('a[href^="#"]')) {
      menu.close();
      return;
    }

    // Backdrop clicks target the dialog; exclude clicks within the panel.
    if (event.target !== menu) return;
    const bounds = menu.getBoundingClientRect();
    if (
      event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom
    ) {
      menu.close();
    }
  });

  desktop.addEventListener('change', () => {
    if (desktop.matches && menu.open) menu.close();
  });
}

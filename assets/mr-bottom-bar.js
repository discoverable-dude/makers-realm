/* Bottom bar actions: open the theme's menu, search and basket, and keep the basket count up to date. */
(() => {
  const bar = document.querySelector('.mr-bar');
  if (!bar) return;

  const open = {
    menu: () => document.querySelector('header-drawer details > summary'),
    search: () => document.querySelector('details-modal.header__search summary'),
    cart: () => document.querySelector('#cart-icon-bubble'),
  };

  bar.addEventListener('click', (event) => {
    const button = event.target.closest('[data-mr-bar]');
    if (!button) return;
    const target = open[button.dataset.mrBar]();
    if (target) target.click();
    else if (button.dataset.mrBar === 'cart') window.location = window.routes.cart_url;
  });

  const count = bar.querySelector('[data-mr-bar-count]');
  const refresh = async () => {
    try {
      const cart = await (await fetch(`${window.routes.cart_url}.js`)).json();
      count.textContent = cart.item_count;
      count.hidden = cart.item_count === 0;
    } catch (error) {
      /* leave the count as rendered */
    }
  };

  if (typeof subscribe === 'function' && typeof PUB_SUB_EVENTS !== 'undefined') {
    subscribe(PUB_SUB_EVENTS.cartUpdate, refresh);
  }
})();

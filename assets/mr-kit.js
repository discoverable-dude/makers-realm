/* Starter kit: shows the running total and adds every item in the kit to the basket in one request. */
class MrKit extends HTMLElement {
  connectedCallback() {
    this.money = new Intl.NumberFormat(undefined, { style: 'currency', currency: this.dataset.currency || 'GBP' });
    this.total = this.querySelector('.mr-kit__total');
    this.button = this.querySelector('.mr-kit__add');
    this.status = this.querySelector('.mr-kit__status');
    this.querySelectorAll('.mr-kit__select').forEach((select) => select.addEventListener('change', () => this.update()));
    this.button.addEventListener('click', () => this.add());
    this.update();
  }

  selections() {
    const picks = [];
    this.querySelectorAll('.mr-kit__item').forEach((item) => {
      const select = item.querySelector('.mr-kit__select');
      const source = select ? select.selectedOptions[0] : item.querySelector('.mr-kit__fixed');
      const id = Number(select ? select.value : source.value);
      picks.push({ id, price: Number(source.dataset.price) });
    });
    return picks;
  }

  update() {
    const sum = this.selections().reduce((total, pick) => total + pick.price, 0);
    this.total.textContent = this.money.format(sum / 100);
  }

  async add() {
    if (this.button.getAttribute('aria-disabled') === 'true') return;
    this.button.setAttribute('aria-disabled', 'true');
    const cart = document.querySelector('cart-drawer');
    const body = { items: this.selections().map((pick) => ({ id: pick.id, quantity: 1 })) };
    if (cart) {
      body.sections = cart.getSectionsToRender().map((section) => section.id).join(',');
      body.sections_url = window.location.pathname;
    }

    try {
      const response = await fetch(`${window.routes.cart_url}/add.js`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json', 'X-Requested-With': 'XMLHttpRequest' },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      if (data.status) throw new Error(data.description || data.message);

      this.status.textContent = 'Kit added to your basket';
      if (cart) {
        if (typeof publish === 'function' && typeof PUB_SUB_EVENTS !== 'undefined') {
          publish(PUB_SUB_EVENTS.cartUpdate, { source: 'mr-kit', cartData: data });
        }
        cart.classList.remove('is-empty');
        cart.renderContents(data);
      } else {
        window.location = window.routes.cart_url;
      }
    } catch (error) {
      this.status.textContent = 'Could not add the kit. Please try again.';
      this.button.textContent = 'Try again';
    } finally {
      this.button.removeAttribute('aria-disabled');
    }
  }
}

if (!customElements.get('mr-kit')) customElements.define('mr-kit', MrKit);

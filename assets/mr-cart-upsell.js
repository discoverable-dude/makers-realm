/* "You might also need" row in the cart. Uses Shopify's recommendations for the products in the cart. */
class MrCartUpsell extends HTMLElement {
  connectedCallback() {
    this.cartIds = (this.dataset.productIds || '').split(',').filter(Boolean).map(Number);
    this.limit = Number(this.dataset.limit) || 3;
    this.list = this.querySelector('.mr-upsell__list');
    this.money = new Intl.NumberFormat(undefined, { style: 'currency', currency: this.dataset.currency || 'GBP' });
    this.load();
  }

  async recommendations(productId, intent) {
    const key = `mr-upsell-${productId}-${intent}`;
    try {
      const cached = sessionStorage.getItem(key);
      if (cached) return JSON.parse(cached);
    } catch (error) {
      /* storage blocked */
    }
    const response = await fetch(`/recommendations/products.json?product_id=${productId}&limit=8&intent=${intent}`);
    if (!response.ok) return [];
    const products = (await response.json()).products || [];
    try {
      sessionStorage.setItem(key, JSON.stringify(products));
    } catch (error) {
      /* storage blocked */
    }
    return products;
  }

  async load() {
    const seeds = [...this.cartIds].reverse().slice(0, 3);
    const found = new Map();

    for (const intent of ['complementary', 'related']) {
      for (const id of seeds) {
        const products = await this.recommendations(id, intent).catch(() => []);
        products.forEach((product) => {
          const available = product.variants && product.variants.some((variant) => variant.available);
          if (available && !this.cartIds.includes(product.id) && !found.has(product.id)) found.set(product.id, product);
        });
        if (found.size >= this.limit) break;
      }
      if (found.size >= this.limit) break;
    }

    [...found.values()].slice(0, this.limit).forEach((product) => this.list.append(this.item(product)));
    this.hidden = !this.list.children.length;
  }

  item(product) {
    const li = document.createElement('li');
    li.className = 'mr-upsell__item';

    const image = document.createElement('img');
    image.className = 'mr-upsell__image';
    image.alt = '';
    image.loading = 'lazy';
    if (product.featured_image) image.src = product.featured_image.replace(/(\.[a-z]+)(\?|$)/i, '_160x160_crop_center$1$2');

    const text = document.createElement('div');
    const name = document.createElement('a');
    name.className = 'mr-upsell__name';
    name.href = product.url;
    name.textContent = product.title;
    const price = document.createElement('span');
    price.className = 'mr-upsell__price';
    price.textContent = (product.variants.length > 1 ? 'From ' : '') + this.money.format(product.price / 100);
    text.append(name, price);

    const single = product.variants.length === 1 && product.variants[0].available;
    const action = document.createElement(single ? 'button' : 'a');
    action.className = 'mr-upsell__button';
    if (single) {
      action.type = 'button';
      action.textContent = 'Add';
      action.addEventListener('click', () => this.add(product.variants[0].id, action));
    } else {
      action.href = product.url;
      action.textContent = 'Choose options';
    }

    li.append(image, text, action);
    return li;
  }

  async add(variantId, button) {
    button.setAttribute('aria-disabled', 'true');
    const cart = document.querySelector('cart-drawer');
    const body = new FormData();
    body.append('id', variantId);
    body.append('quantity', 1);
    if (cart) {
      body.append('sections', cart.getSectionsToRender().map((section) => section.id));
      body.append('sections_url', window.location.pathname);
    }

    try {
      const response = await fetch(window.routes.cart_add_url, {
        method: 'POST',
        headers: { 'X-Requested-With': 'XMLHttpRequest', Accept: 'application/javascript' },
        body,
      });
      const data = await response.json();
      if (data.status) throw new Error(data.description || data.message);

      if (cart) {
        if (typeof publish === 'function' && typeof PUB_SUB_EVENTS !== 'undefined') {
          publish(PUB_SUB_EVENTS.cartUpdate, { source: 'mr-cart-upsell', productVariantId: variantId, cartData: data });
        }
        cart.renderContents(data);
      } else {
        window.location = window.routes.cart_url;
      }
    } catch (error) {
      button.removeAttribute('aria-disabled');
      button.textContent = 'Try again';
    }
  }
}

if (!customElements.get('mr-cart-upsell')) customElements.define('mr-cart-upsell', MrCartUpsell);

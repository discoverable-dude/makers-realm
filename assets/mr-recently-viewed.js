/* Remembers the last products a shopper looked at (in their own browser) and shows them as a row. */
class MrRecentlyViewed extends HTMLElement {
  connectedCallback() {
    const key = 'mr-recently-viewed';
    let handles = [];
    try {
      handles = JSON.parse(localStorage.getItem(key)) || [];
    } catch (error) {
      handles = [];
    }

    const current = this.dataset.handle;
    const others = handles.filter((handle) => handle !== current);

    if (current) {
      try {
        localStorage.setItem(key, JSON.stringify([current, ...others].slice(0, 12)));
      } catch (error) {
        /* storage blocked, the row simply stays empty */
      }
    }

    const limit = Number(this.dataset.limit) || 5;
    this.render(others.slice(0, limit));
  }

  async render(handles) {
    if (!handles.length) return;
    const list = this.querySelector('.mr-rv__list');
    const money = new Intl.NumberFormat(undefined, { style: 'currency', currency: this.dataset.currency || 'GBP' });

    const products = await Promise.all(
      handles.map((handle) =>
        fetch(`/products/${encodeURIComponent(handle)}.js`)
          .then((response) => (response.ok ? response.json() : null))
          .catch(() => null)
      )
    );

    products.filter(Boolean).forEach((product) => {
      const item = document.createElement('li');
      item.className = 'mr-rv__item';
      const link = document.createElement('a');
      link.href = product.url;

      if (product.featured_image) {
        const image = document.createElement('img');
        image.src = product.featured_image.replace(/(\.[a-z]+)(\?|$)/i, '_600x$1$2');
        image.alt = '';
        image.loading = 'lazy';
        link.append(image);
      }

      const title = document.createElement('span');
      title.className = 'mr-rv__title';
      title.textContent = product.title;
      const price = document.createElement('span');
      price.className = 'mr-rv__price';
      price.textContent = (product.variants.length > 1 ? 'From ' : '') + money.format(product.price / 100);
      link.append(title, price);
      item.append(link);
      list.append(item);
    });

    this.hidden = !list.children.length;
  }
}

if (!customElements.get('mr-recently-viewed')) customElements.define('mr-recently-viewed', MrRecentlyViewed);

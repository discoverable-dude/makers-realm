/* Mobile "Load more" for collection grids. The button is a real link to the next page, so it still works without JavaScript. */
class MrLoadMore extends HTMLElement {
  connectedCallback() {
    this.link = this.querySelector('a');
    this.link.addEventListener('click', (event) => {
      event.preventDefault();
      this.load();
    });
  }

  async load() {
    if (this.loading) return;
    this.loading = true;
    this.link.setAttribute('aria-busy', 'true');

    try {
      const response = await fetch(this.link.href);
      const doc = new DOMParser().parseFromString(await response.text(), 'text/html');
      const grid = this.closest('.collection').querySelector('#product-grid');

      doc.querySelectorAll('#product-grid > li').forEach((item) => {
        item.classList.remove('scroll-trigger', 'animate--slide-in');
        item.removeAttribute('data-cascade');
        item.removeAttribute('style');
        grid.appendChild(document.importNode(item, true));
      });

      const next = doc.querySelector('mr-load-more a');
      if (next) {
        this.link.href = next.href;
      } else {
        this.hidden = true;
      }
    } catch (error) {
      window.location.href = this.link.href;
    } finally {
      this.loading = false;
      this.link.removeAttribute('aria-busy');
    }
  }
}

if (!customElements.get('mr-load-more')) customElements.define('mr-load-more', MrLoadMore);

/* Tabs for the home page product showcase. Arrow keys move between tabs. */
class MrProductTabs extends HTMLElement {
  connectedCallback() {
    this.tabs = [...this.querySelectorAll('[role="tab"]')];
    this.tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => this.select(tab));
      tab.addEventListener('keydown', (event) => {
        const step = { ArrowRight: 1, ArrowLeft: -1 }[event.key];
        if (!step) return;
        const next = this.tabs[(index + step + this.tabs.length) % this.tabs.length];
        next.focus();
        this.select(next);
      });
    });
  }

  select(selected) {
    this.tabs.forEach((tab) => {
      const active = tab === selected;
      tab.setAttribute('aria-selected', active ? 'true' : 'false');
      tab.tabIndex = active ? 0 : -1;
      this.querySelector('#' + tab.getAttribute('aria-controls')).hidden = !active;
    });
  }
}

if (!customElements.get('mr-product-tabs')) customElements.define('mr-product-tabs', MrProductTabs);

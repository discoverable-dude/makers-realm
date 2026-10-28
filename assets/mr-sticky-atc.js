/* Shows the sticky Add to basket bar once the main buy buttons have scrolled above the viewport. */
(() => {
  const bar = document.querySelector('.mr-sticky-atc');
  if (!bar) return;

  const form = document.getElementById(bar.dataset.formId);
  const anchor = form && (form.closest('product-form') || form);
  if (!anchor) return;

  new IntersectionObserver(([entry]) => {
    bar.hidden = entry.isIntersecting || entry.boundingClientRect.top > 0;
  }).observe(anchor);

  const mainButton = form.querySelector('[type="submit"]');
  const barButton = bar.querySelector('button');

  const syncState = () => {
    const unavailable = mainButton.disabled || mainButton.getAttribute('aria-disabled') === 'true';
    barButton.setAttribute('aria-disabled', unavailable ? 'true' : 'false');
    barButton.textContent = mainButton.textContent.trim() || barButton.textContent;
  };

  if (mainButton) {
    syncState();
    new MutationObserver(syncState).observe(mainButton, { attributes: true, childList: true, subtree: true, characterData: true });
  }

  barButton.addEventListener('click', () => {
    if (mainButton && barButton.getAttribute('aria-disabled') === 'true') {
      mainButton.scrollIntoView({ block: 'center', behavior: 'smooth' });
      return;
    }
    form.requestSubmit();
  });
})();

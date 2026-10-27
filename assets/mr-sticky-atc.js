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

  bar.querySelector('button').addEventListener('click', () => {
    form.requestSubmit();
  });
})();

/* Header search: shows popular searches when the field is focused and empty, hides them as soon as there is a query. */
(() => {
  const root = document.querySelector('.mr-header-search');
  if (!root) return;
  const input = root.querySelector('.mr-header-search__input');
  const popular = root.querySelector('.mr-header-search__popular');
  if (!input || !popular) return;

  const sync = () => {
    popular.hidden = !(document.activeElement === input && input.value.trim() === '');
  };

  input.addEventListener('focus', sync);
  input.addEventListener('input', sync);
  document.addEventListener('click', (event) => {
    if (!root.contains(event.target)) popular.hidden = true;
  });
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') popular.hidden = true;
  });
})();

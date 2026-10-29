/* Back to top button: appears after scrolling about two screens. */
(() => {
  const button = document.querySelector('.mr-to-top');
  if (!button) return;

  const toggle = () => {
    button.hidden = window.scrollY < window.innerHeight * 2;
  };

  window.addEventListener('scroll', toggle, { passive: true });
  toggle();

  button.addEventListener('click', () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  });
})();

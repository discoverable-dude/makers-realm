/* Product detail blocks are open on desktop and collapsible on small screens. */
(() => {
  const query = window.matchMedia('(max-width: 749px)');
  const blocks = document.querySelectorAll('.mr-pd__block');

  const sync = () => {
    blocks.forEach((block) => {
      block.open = !query.matches;
    });
  };

  sync();
  query.addEventListener('change', sync);
})();

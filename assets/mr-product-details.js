/* Product detail blocks are open on desktop and collapsible on small screens. */
(() => {
  const query = window.matchMedia('(max-width: 989px)');
  const blocks = document.querySelectorAll('.mr-pd__block');

  const sync = () => {
    blocks.forEach((block) => {
      block.open = !query.matches;
    });
  };

  blocks.forEach((block) => {
    block.querySelector('summary').addEventListener('click', (event) => {
      if (!query.matches) event.preventDefault();
    });
  });

  sync();
  query.addEventListener('change', sync);
})();

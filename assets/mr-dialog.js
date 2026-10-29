/* Opens and closes <dialog> pop-ups. Buttons use data-mr-dialog="id" to open and data-mr-dialog-close to close. */
(() => {
  if (window.mrDialogReady) return;
  window.mrDialogReady = true;

  document.addEventListener('click', (event) => {
    const opener = event.target.closest('[data-mr-dialog]');
    if (opener) {
      const dialog = document.getElementById(opener.dataset.mrDialog);
      if (dialog && typeof dialog.showModal === 'function') dialog.showModal();
      return;
    }

    if (event.target.closest('[data-mr-dialog-close]')) {
      event.target.closest('dialog').close();
      return;
    }

    if (event.target.tagName === 'DIALOG') event.target.close();
  });
})();

document.addEventListener('DOMContentLoaded', () => {
  let modalLayer = document.querySelector('#modal-layer');
  let modal = document.querySelector('#modal');
  let modalTitle = document.querySelector('h3');
  let modalImage =  document.querySelector('img');
  let modalText = document.querySelector('p');
  let teamLinks = document.querySelectorAll('#team li > a');

  function showModal(event) {
    event.preventDefault();
    let link = event.target.closest('a');
    modalTitle.textContent = link.dataset.name;
    modalImage.src = link.dataset.imageSource;
    modalImage.alt = link.dataset.name;
    modalText.textContent = link.dataset.text;
    modalLayer.classList.replace('hide', 'show');
    modal.classList.replace('hide', 'show');
  }

  function hideModal(event) {
    event.preventDefault();
    modalTitle.textContent = '';
    modalImage.src = '';
    modalImage.alt = '';
    modalText.textContent = '';
    modalLayer.classList.replace('show', 'hide');
    modal.classList.replace('show', 'hide');
  }

  teamLinks.forEach(link => link.addEventListener('click', showModal));
  document.querySelector('#modal-layer').addEventListener('click', hideModal);
  document.querySelector('#modal').addEventListener('click', hideModal);
  document.addEventListener('keyup', (event) => {
    if (event.keyCode === 27) {
      hideModal(event);
    }
  });
});
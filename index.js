const button = document.querySelector('.justBtn');
const modal = document.querySelector('.modal-box');
const closeButton = document.querySelector('#closeBtn');

button.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

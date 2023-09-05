const menu = document.querySelector('#menu');
const header = document.querySelector('header');

menu.addEventListener('click', function () {
  header.classList.toggle('open');
});

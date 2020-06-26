// Toggle Hamburger Icon
(() => {const ul = document.querySelector('.nav-lists');

const hamburger = document.querySelector('.hamburger-icon');

hamburger.addEventListener('click', () => {
ul.classList.toggle('show');
hamburger.classList.toggle('show');
})})()

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menuLinks.classList.toggle('active');
    menu.classList.toggle('is-active');
})
const menu = document.querySelector('#mobile-menu')
const link = document.querySelector('.nav_menu')

menu.addEventListener('click' , function() {
    menu.classList.toggle('aktif');
    link.classList.toggle('active');
});

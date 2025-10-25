const navMobile = document.querySelector('.nav_mobile')
const menuMobile = document.querySelector('.nav_desktop')

// abre e fecha menu de navegação no mobile
navMobile.addEventListener('click', () => {
    menuMobile.classList.toggle('display-none');
    navMobile.classList.toggle('toggle');
})
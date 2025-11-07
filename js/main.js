const navMobile = document.querySelector('.nav-icons')
const menuMobile = document.querySelector('.nav-mobile_lista')

// abre e fecha menu de navegação no mobile
navMobile.addEventListener('click', () => {
    navMobile.classList.toggle('toggle');

    menuMobile.toggleAttribute('hidden');
})
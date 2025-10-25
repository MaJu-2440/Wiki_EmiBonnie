const toggleDivBtn = document.querySelectorAll('section h2');
const indiceBtn = document.querySelector('.indice-btn');
const indiceIcons = document.querySelector('.indice-icons');
const indiceMenu = document.querySelector('.indice');

//abre e fecha menu flutante mobile de indice
indiceBtn.addEventListener('click', () => {
    indiceMenu.classList.toggle('display-none');
    indiceIcons.classList.toggle('toggle');
})

// abre e fecha as seções no modo mobile
toggleDivBtn.forEach(div => {
    div.addEventListener('click', () => {
        const setaDaDiv = div.lastElementChild;
        setaDaDiv.classList.toggle('selected');

        const divContent = div.nextElementSibling;

        if(divContent) {
            divContent.classList.toggle('display-none');
        }
    })
});
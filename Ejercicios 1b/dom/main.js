const openButton = document.querySelector('#open-btn');


const addButton = document.querySelector('#add-btn');

const removeButton = document.querySelector('#rmv-btn');

const popUp = document.querySelector('.pop-up');

const main = document.querySelector('main');


const addParagraphToMain = () => {
    const elementToAppend = document.createElement('p')
    elementToAppend.textContent = 'Este párrafo lo creé con JS'
    main.appendChild(elementToAppend)

}

addButton.addEventListener('click', addParagraphToMain)



removeButton.onclick = () => {
    const lastP = main.lastChild
    main.removeChild(lastP)
}

/*
openButton.onclick = () => {
    const currentText = openButton.textContent.trim()
    if (currentText === 'Abrir') {
        popUp.classList.toggle('closed')
        openButton.textContent = 'Cerrar'
    } else {
        popUp.classList.toggle('closed')
        openButton.textContent = 'Abrir'
    }
    popUp
}
*/
//mejor hecha, rework:

openButton.onclick = () => {
    let {textContent} = openButton;
    textContent.trim() === 'Abrir' ? textContent = 'Cerrar' : textContent = 'Abrir'
    popUp.classList.toggle('closed')
}
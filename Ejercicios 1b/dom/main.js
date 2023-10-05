const openButton = document.querySelector('#open-btn');


const addButton = document.querySelector('#add-btn');


const removeButton = document.querySelector('#rmv-btn');

const main = document.querySelector('main')


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
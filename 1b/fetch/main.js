const CHARACTERS = []

const url = 'https://rickandmortyapi.com/api/character'

const body = document.querySelector('body')


const fetchData = () => {
    return fetch(url)
        .then((res) => res.json())
        .then((data) => {
            CHARACTERS.push(...data.results)
            document.querySelector('button').style.display = 'none'
        })
        .catch((err) => { console.error('Hubo un error: ' + err) })
        .finally(console.log('Fetching terminado'))

}
/*
const fetchData = async () => {
    try {
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
    }
    catch {
        console.log(error)
    }
}
*/


const createCards = () => {
    CHARACTERS.forEach((personaje) => {
        createCharacterCard(personaje)
    })
}

const createCharacterCard = (char) => {
    const card = document.createElement('div')
    card.classList.add('card')

    const name = document.createElement('h1')
    name.textContent = char.name
    const gender = document.createElement('span')
    gender.textContent = char.gender === 'Male' ? '⚦' : '♀️'

    const img = document.createElement('img')
    img.setAttribute('src', char.image)

    const link = document.createElement('a')
    link.setAttribute('href', char.url)
    link.appendChild(img)

    card.appendChild(name)
    card.appendChild(gender)
    card.appendChild(link)

    body.appendChild(card)

}

document.querySelector('button').onclick = async () => {
    await fetchData();
    createCards();
}
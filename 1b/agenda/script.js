
//a partir del formulario, generar una instancia de la clase
//Contact, añadirla al final del array, y actualizar el DOM para que
//esté sincronizado con el array PHONEBOOK

function toast(txt, type) {
    if (type === 'error') {
        Toastify({
            text: txt,
            duration: 3000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #e80e0e, #e8910e)",
                fontFamily: "system-ui, Roboto"
            },
        }).showToast();
    } else {
        Toastify({
            text: txt,
            duration: 3000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
                fontFamily: "system-ui, Roboto"
            },
        }).showToast();
    }
}





class Contact {
    constructor(name, tel, email) {
        this.name = name
        this.tel = tel
        this.email = email
    }
    add() {
        PHONEBOOK.push(this)
    }
}

//así phonebook tiene los métod
//os de array:
const PHONEBOOK = [];

const STORAGE_KEY = 'PHONEBOOK';

const addButton = document.querySelector('#add-btn');
const nameInput = document.querySelector('#name');
const telInput = document.querySelector('#tel');
const mailInput = document.querySelector('#mail');
const phonebookDOM = document.querySelector('#agenda')

//crear el contacto



const createContact = (e) => {

    e.preventDefault()
    const name = nameInput.value;
    const tel = telInput.value;
    const mail = mailInput.value;


    //si estan vacios
    if (!name || !tel || !mail) {
        toast('Hubo un error verificando los datos', 'error') //toast
    } else {
        let newContact = new Contact(name, tel, mail)
        checkIfContactExists(newContact)


    }
    //vaciar los input
    document.querySelector('form').reset()

}


function checkIfContactExists(obj) {
    //comprobación si se repiten
    //vamos a usar el método SOME del prototipo de Array que
    //devuelve true si encuentra al mmenos un elemento
    //que cumpla con la condición y false si no encuentra ninguno
    if (PHONEBOOK.some((cntct) => cntct.email ===
        obj.email)) {
        toast('Ya está agendado', 'error');
    } else {

        // accedo a su método add, el cual lo sabe pushear
        // a PHONEBOOK. Enviar al array
        obj.add()
        //guardar en memoria del navegador
        console.log(obj)
        updateDOM()
        localStorage.setItem(STORAGE_KEY, JSON.stringify(PHONEBOOK))

        toast(`Añadí a ${obj.name}`)
    }

}


//editar esta función para que nos sirva para todo el array
//actualizar el dom
function updateDOM() {
    //iterar sobre PHONEBOOK pasando cada contacto como
    //parámetro a esta función
    renewDOM()
    /*   for (let i = 0; i < PHONEBOOK.length; i++) {
           createContactDiv(PHONEBOOK[i])
       }
   
   } mejor con foreach:
   */

    PHONEBOOK.forEach((contacto) => {
        createContactDiv(contacto)
    })
}
const renewDOM = () => {

    agenda.innerHTML = '  <h2>Contactos</h2>'
}


const createContactDiv = (obj) => {
    const { name, tel, email } = obj //la desestructuracion me permite
    //guardar el valor de propiedades
    //de un obj en variables del mismo nombre


    let newContact = document.createElement('div')

    newContact.classList.add('contacto')

    const nameNode = document.createElement('h3')
    nameNode.textContent = name;
    const telNode = document.createElement('span')
    telNode.textContent = tel;
    const mailNode = document.createElement('span')
    mailNode.textContent = email;

    const editBtn = document.createElement('button')
    editBtn.setAttribute('class', 'edit-btn')
    editBtn.textContent = 'Editar'
    const deleteBtn = document.createElement('button')
    deleteBtn.setAttribute('class', 'delete-btn')
    deleteBtn.textContent = 'Borrar'


    //llamar a la función para editar contacto
    editBtn.addEventListener('click', editContact)

    //llamar a la función para borrar contacto
    deleteBtn.addEventListener('click', deleteContact)


    newContact.appendChild(nameNode)
    newContact.appendChild(editBtn)
    newContact.appendChild(mailNode)
    newContact.appendChild(deleteBtn)
    newContact.appendChild(telNode)


    agenda.appendChild(newContact)

}

const editContact = (e) => {

    const { nextSibling } = e.target
    //recibir mail
    const selectedMail = nextSibling.textContent
    //tomar los nuevos datos (prompt)
    const { newName, newEmail, newTel } = askNewData()

    console.log(newName, newEmail, newTel)

    //encontrar el item del array con ese mail para guardar los datos
    const selectedContact = PHONEBOOK.find(person => person.email === selectedMail)
    //encontrar el índice del contacto para editarlo (el del array)
    const selectedIndex = PHONEBOOK.indexOf(selectedContact)


    PHONEBOOK[selectedIndex].name = newName.trim() ? newName : selectedContact.name
    PHONEBOOK[selectedIndex].email = newEmail.trim() ? newEmail : selectedContact.email
    PHONEBOOK[selectedIndex].tel = newTel.trim() ? newTel : selectedContact.tel

    //actualizar el storage
    //actualizar el dom


    localStorage.setItem(STORAGE_KEY, JSON.stringify(PHONEBOOK))
    updateDOM()
}





function askNewData() {
    const newName = prompt('Nuevo nombre')

    const newEmail = prompt('Nuevo email')

    const newTel = prompt('Nuevo teléfono')

    return {
        newName: newName,
        newEmail: newEmail,
        newTel: newTel,
    }

}

const deleteContact = (e) => { }
//recibir mail
const selectedMail = e.target.previousSibling.textContent;
alert(selectedMail)
//encontrar el item del array con ese mail y eliminarlo
//actualizar el array
//actualizar el storage
//actualizar el dom


addButton.onclick = (e) => {
    createContact(e);


}

//hacer una función que al iniciar el programa revise el almacenamiento por si hay algo de antes

const checkStorage = () => {
    const savedData = localStorage.getItem(STORAGE_KEY)


    if (!savedData) {
        return //null
    } else {
        //guardamos en una variable el resultado parseado de la 
        //información que teníamos en storage
        const parsedData = JSON.parse(savedData);
        //hacemos un push del spread de parsedData

        //el spread operator ( ... )
        PHONEBOOK.push(...parsedData);
        updateDOM()
    } // o if(savedData){
    //console.log(savedData)
    //}
}

//para que se ejecute lo de arriba apenas cargo la pag
window.onload = () => {
    checkStorage()
}
// o sólo poner checkStorage()
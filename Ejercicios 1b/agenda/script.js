//a partir del formulario, generar una instancia de la clase
//Contact, añadirla al final del array, y actualizar el DOM para que
//esté sincronizado con el array PHONEBOOK


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

//así phonebook tiene los métodos de array:
const PHONEBOOK = [];

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
        alert('Hubo un error verificando los datos')
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
        alert('Ya está agendado')
    } else {

        // accedo a su método add, el cual lo sabe pushear
        // a PHONEBOOK
        obj.add()
        console.log(obj)
        updateDOM(obj)
    }

}



//actualizar el dom
function updateDOM(obj) {
    //la desestructuracion me permite
    //guardar el valor de propiedades
    //de un obj en variables del mismo nombre
    const { name, tel, email } = obj

    let newContact = document.createElement('div')

    newContact.classList.add('contacto')

    const nameNode = document.createElement('h3')
    nameNode.textContent = name;
    const telNode = document.createElement('span')
    telNode.textContent = tel;
    const mailNode = document.createElement('span')
    mailNode.textContent = email;


    newContact.appendChild(nameNode)
    newContact.appendChild(mailNode)
    newContact.appendChild(telNode)


    agenda.appendChild(newContact)
}



addButton.onclick = (e) => {
    createContact(e);


}
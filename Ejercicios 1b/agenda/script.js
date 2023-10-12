//a partir del formulario, generar una instancia de la clase
//Contact, añadirla al final del array, y actualizar el DOM para que
//sincronizando con el array PHONEBOOK


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

//crear el contacto

addButton.addEventListener('click', createContact)

const createContact = () => {
    const name = nameInput.value;
    const tel = telInput.value;
    const mail = mailInput.value;

    let newContact = new Contact(name, tel, mail)

    console.log(newContact)
}



//enviarlo al array

//actualizar el dom
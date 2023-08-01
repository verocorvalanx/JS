const prompt = require ("prompt-sync")({sigint:true})
let dataPersona = [];

const addDataPersona = (firstName, lastName, birthday, address, status, condition) => {
    let person = {
        firstName,
        lastName,
        birthday,
        address,
        status
    }
    if (condition){
        dataPersona.push(person);
    }
    else{
        dataPersona.unshift(person);
    }
}

addDataPersona("Juan", "Perez", 20, "CABA", 0, true);
addDataPersona("María", "Perez", 18, "CABA", 0, false);


//-----otra forma:

for(let i=1; i<=3; i++){
    let firstName = prompt("INGRESE EL NOMBRE: ");
    let lastName = prompt("INGRESE EL APELLIDO: ");
    let birthday = parseInt(prompt("INGRESE EDAD: "));
    let address = prompt("INGRESE DIRECCIÓN: ");
    let status = parseInt(prompt("INGRESE EL STATUS: "));

    addDataPersona(firstName,lastName,birthday,address,status,true);

}


console.table(dataPersona);
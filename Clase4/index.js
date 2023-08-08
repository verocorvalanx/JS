const prompt = require("prompt-sync")({ sigint: true })

let dataPersona = [];

const addDataPersona = (firstName, lastName, birthday, address, status, condition) => {
    let person = {
        firstName,
        lastName,
        birthday,
        address,
        status
    }
    if (condition) {
        dataPersona.push(person);
    }
    else {
        dataPersona.unshift(person);
    }
}

addDataPersona("Juan", "Perez", 20, "CABA", 0, true);
addDataPersona("María", "Lopez", 18, "CABA", 2, true);
addDataPersona("José", "Gutierrez", 18, "CABA", 2, true);
addDataPersona("Antonio", "Carrillo", 16, "CABA", 3, true);
addDataPersona("Gabriela", "Andrada", 5, "CABA", 0, true);
addDataPersona("Victor", "Otero", 56, "CABA", 1, true);
addDataPersona("Daiana", "Zarelli", 10, "CABA", 3, true);
addDataPersona("Oscar", "Gonzalez", 48, "CABA", 1, true);
addDataPersona("Nadia", "Alaimo", 29, "CABA", 4, true);
addDataPersona("Martina", "Ardanaz", 14, "CABA", 5, true);


//-----otra forma:

// for(let i=1; i<=3; i++){
//     let firstName = prompt("INGRESE EL NOMBRE: ");
//     let lastName = prompt("INGRESE EL APELLIDO: ");
//     let birthday = parseInt(prompt("INGRESE EDAD: "));
//     let address = prompt("INGRESE DIRECCIÓN: ");
//     let status = parseInt(prompt("INGRESE EL STATUS: "));

//     addDataPersona(firstName,lastName,birthday,address,status,true);

// }


console.table(dataPersona);


let words = prompt("Filtrar por: ");
let dataPersonaFilter = dataPersona.filter((person) => {
    words = words.trim().toLowerCase();
    let firstName = person.firstName.toLowerCase();
    return firstName.includes(words);
})

console.log(dataPersonaFilter);



//-----


const promedio = ()=>{
    let suma =0;
    dataPersona.forEach((person)=>{
        suma += person.birthday;
    });

let prom = suma/ dataPersona.length;
return prom;
}


console.log(promedio());


const prompt = require("prompt-sync")({ sigint: true });

let num = parseInt(prompt("Ingresar un número:"));
let operacion = prompt("Seleccione una acción: 1. Suma 2. Resta 3. Mult 4. Div");

const suma = (num) => {
    for (let i = 0; i < 10; i++) {
        let r = num + i;
        console.log(`${num} + ${i} = ${r}`);
    }
};

const resta = (num) => {
    for (let i = 0; i < 10; i++) {
        let a = num + i;
        let r = num + i - num;
        console.log(`${a} - ${num} = ${r}`);
    }
}

const mult = (num) => {
    for (i = 1; i <= 10; i++) {
        let r = num * i;
        console.log(`${num} x ${i} = ${r}`);
    }
}

const div = (num)=>{
    for (let i = 0; i < 10; i++) {
        let a = num * i;
        let r = num * i / num;
        console.log(`${a} / ${num} = ${r}`);
        
    }
}

switch (operacion) {
    case "1": suma(num);
        break;
    case "2": resta(num);
        break;
    case "3": mult(num);
        break;
    case "4": div(num);
        break;
    default: console.log("Número de acción inválido");
}


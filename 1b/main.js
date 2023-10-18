/*escribí una función calcularAñosPerro()
que tome dos parámetros (nombre y añoDeNacimiento)
y muestre por consola un mensaje 'nombre tiene X años
en años de humano, y X años en años de perro'
Se dice que un año humano equivale a 7 años de perro
Si los parámetros no son correctos, la función debe cortar
su ejecución y devolver un mensaje de error */

/*
let anioActual = 2023;

const calcularAniosPerro = (nombre, anioDeNacimiento) => {
    if (typeof anioDeNacimiento !== "number" || typeof nombre !== "string") {
        alert("Datos incorrectos");
        return;
    } else {
        let edadHumana = anioActual - anioDeNacimiento;
        let anioPerro = edadHumana * 7;
        alert(`${nombre} tiene ${edadHumana} años de humano y ${anioPerro} años de perro`);
    }
}
calcularAniosPerro("vero", 1993);
    

*/





/*
escribir una función getSquare()
que guarde en una variable el cuadrado de un número que reciba
por parámetro
 o return number * number

 const resultado = getSquare()
*/
/*
const getSquare = (number) =>{
cuadrado= number ** 2;
alert(`El cuadrado de ${number} es ${cuadrado}`);
}
 getSquare(3);

*/

/*
escribir una función que tome como parámetro
un array, una clave y un valor
y devuelva a una variable el primer elemento del array
donde clave === valor
*/
/*
class Friend {
    constructor(name, job) {
        this.name = name;
        this.job = job;
    }
    goToWork() {
        console.log(`Soy ${this.name} y trabajo de ${this.job}`)
    }
}

const friends = [new Friend('Raúl', 'albañil'),
new Friend('Sofía', 'programadora')]

friends[1].goToWork()

const findInThatThis = (arr, key, value) => {
    return arr.find(friend => friend[key] === value)

}
let resultado = findInThatThis(friends, 'name', 'Sofía')

console.log(resultado)
*/

/*
escribí una función returnLongest() que tome como parámetros
dos strings y retorne el string más largo
Si ambas strings son igualmente largas, devuelve un mensaje
'They're the same'
Si una de las strings no es válida, devuelve un mensaje
'One of the values is not a string'
Si ambos valores son inválidos, devuelve 'None of the values 
is a string'

*/
/*

const returnLongest = (stringUno, stringDos) => {
if (typeof stringUno !== "string" && typeof stringDos !== "string") {
    alert("None of the values is a string");
} else if (typeof stringUno !== "string" || typeof stringDos !== "string") {
    alert("One of the values is not a string");
} else if (stringUno.length === stringDos.length){
    alert("they're the same");
} else if(stringUno.length > stringDos.length){
    return alert(`El string más largo es ${stringUno}`);
} else{
    return alert(`El string más largo es ${stringDos}`);
}
}
 

returnLongest("hola", "holaaa")
*/

/*
escribí una función countVowels() que reciba un string
y devuelva (decidí vos cómo mostrar el resultado)
la cantidad de vocales en la palabra

*/


const vowels = ["a", "e", "i", "o", "u"];


const countVowels = (string) => {
let count = 0;
for (let letter of string.toLowerCase()) {
    if(vowels.includes(letter)) {
        count++;
    }
}
return alert(`La cantidad de vocales es ${count}`);
}




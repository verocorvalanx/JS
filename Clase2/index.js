// let a = parseInt(prompt("Ingresar un número:"));
// let dividendo = 1;
// let divisores = 0;

// // for (let i = 1; i <= a; i++) {
// //     if (a % i == 0){
// //         divisores++;
// //     }
// // }

// while (dividendo <= a){
//     let resto = a % dividendo;
//     console.log("El resto es ", resto);
//     if (a % dividendo == 0) {
//         divisores++;
//         console.log("Tiene ", divisores, " divisores");
//     }
//     dividendo++;
// }

// if (divisores <= 2){
//     console.log("Es primo");
// } else {
//     console.log("No es primo");
// }
// let a = parseInt(prompt("Ingresar un número:"));
// for (i=1; i<=10; i++){
    //     let r= a*i;
    //     console.log(`${a} x ${i} = ${r}`);
    // }
    
   
    // let a= parseInt(prompt("Ingresar un número:"));
    // let b= parseInt(prompt("Ingresar un número:"));
    // let c= parseInt(prompt("Ingresar un número:"));

    // if (a>b && a>c){
    //     console.log(a, "es el mayor");
    // } else if(b>a && b>c){
    //     console.log(b, "es el mayor");
    // }else{
    //     console.log(c, "es el mayor");
    // }

    const prompt = require("prompt-sync")({sigint:true});
    let a= parseInt(prompt("Ingresar un número:"));
    let b= parseInt(prompt("Ingresar un número:"));
    let c= parseInt(prompt("Ingresar un número:"));

     if (a<b && a<c){
        console.log(a, "es el menor");
     } else if(b<a && b<c){
         console.log(b, "es el menor");
     }else{
       console.log(c, "es el menor");
     }
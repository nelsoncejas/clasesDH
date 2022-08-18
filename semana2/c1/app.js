// DECLARADA 

function sumar(a, b){
    return a + b
}


// EXPRESADA 
let sumarExpresada = function(a, b){
    return a + b;
}


// FLECHA
let sumarFlecha = (a, b) => a + b;

let doble = a => a * 2;




console.log('INVOCACIONES 🖨️');

console.log(sumar(4, 6))
console.log(sumarExpresada(4, 7))
console.log(sumarFlecha(5, 7))
console.log(doble(7))

console.log('****** FIN *****'); 


/* 
Desarrollar una función que recibe 4 parámetros numéricos

calcular él promedio
retornar él resultado
*/
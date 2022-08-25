/* 
 1 KAHOOT
 2 DUDAS
 3 MDT CUENTAS

*/


function esImpar(a, b) {
    
    if ((a + b) % 2 === 0) {
        return false
    }else{
        return true
    }
}

/* console.log(esImpar(6,4)); // false
console.log(esImpar(6,5)); // true

 */



/*
 ?1 - Desarrollar una funcion que reciba por param el 
 ? array y calcule el promedio

 ??  
   *si promedio >= 7  return true
   *caso contrario    return false

*/




let numeros = [9, 10, 10, 5 ,6];

let notas   = [1, 2, 4, 10 ,6];

for (let i = 0; i < numeros.length; i++) {
    
    console.log(numeros[i] > notas[i]);
    
}

/* function promedio(arrayNumeros) {
    let sumatoria = 0;
    
    for (let i = 0; i < arrayNumeros.length; i++) {
        // 0      =      0    +    0
        // 1     =      1    +    1
        // 2     =      2    +    2
        sumatoria = sumatoria + arrayNumeros[i]
        //sumatoria += arrayNumeros[i]
    }

    let res = sumatoria / arrayNumeros.length

    if (res >= 7) {
        return true
    } else {
        return false
    }

   // return res >= 7; // bool
} */

// console.log(promedio(numeros));



















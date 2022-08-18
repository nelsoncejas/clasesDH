/* 
    ESTRUCTURA.
    ? For
    * While / do While
    ************
    * Ejercitación
    * Fin
*/

/* for(let i = 1; i < 10 ; i++){
    console.log('Hola : ' + i);
} 
*/
/* let j = 0;
while (false) {
    console.log('Hola : ' + j);
    j++;
}  */
/* let j = 0;

do {
    console.log('Hola : ' + j);
    j++;  
} while (false); */


/* 
//?Hacer un código que nos muestre los números del 0 al 10.

//?Realizar un ejercicio en el cual se visualice una cuenta de 1 a 10, y a la vez, una cuenta inversa de 10 a 1.

//?Crear una función que imprima los números pares del del 1 al 20

//?Crear una función que imprima los números impares del del 1 al 20

*/
/* console.log(0);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6); */

const mostrar = function(){
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
}

// mostrar()

const contar1a10 = function(){
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

const contar10a1 = function(){
    for (let i = 10; i >= 1; i--) {
        console.log(i);
    }
}

// contar10a1()

const impar = function(){
    for (let i = 1; i <= 20; i++) {
       
        if (i % 2 !== 0) {
            console.log(i);        
        }
        
    }
}

impar()
console.log('******************');
const par = function(){
    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            console.log(i);        
        }
    }
}

par()
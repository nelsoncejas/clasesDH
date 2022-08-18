/* 
    ?Dudas

    For

    While / do While
*/

/* 
for(let i = 0; i <= 9; i++){

    console.log('Hola: ' + i);
} 


let i = 0 
while (false) {
    console.log('Hola desde while: ' + i);
    i++;
} 

let j = 0 
do {
       
    console.log('Hola desde do while: ' + j);
    j++;
    
} while (false);
 */


/* 
//?Hacer un código que nos muestre los números del 0 al 10.

//?Realizar un ejercicio en el cual se visualice una cuenta de 1 a 10, y a la vez, una cuenta inversa de 10 a 1.

//?Crear una función que imprima los números pares del del 1 al 20

//?Crear una función que imprima los números impares del del 1 al 20

*/

function mostrar2 (){
    
    for (let i = 10; i >= 1; i--) {
        console.log(i);
    }
  /*   let nro = 10;
    for (let i = 1; i  <= 10; i++) {
        console.log(nro); 
        nro --;   
    } */

}
// mostrar2(); // mostrar del 10 al 1

/* const mostrarDelXAlY = function(x, y){

    for (let i = x; i <= y; i++) {
        console.log(i);
    }
}

mostrarDelXAlY(90, 100); */

function nrosPares(){
     for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }

  /*   for (let i = 2; i <= 22 ; i = i + 2) {
        console.log(i);
    } */
}

//
function nrosImpares(){
 
    for (let i = 1; i <= 20; i++) {
       if (i % 2 !== 0) {
           console.log(i);
       }
    }

}
nrosImpares();
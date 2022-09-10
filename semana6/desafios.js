/* 
Desarrollar una función que genere una matriz de 5 x 5.

[
    [1,1,1,1,1],
    [2,2,2,2,2],
    [2,2,2,2,2],
    [2,2,2,2,2],
    [2,2,2,2,2],
]
*/

function generar(){
    let matriz = []
    for (let i = 0; i < 5; i++) {
        matriz.push([])
        for (let j = 0; j < 5; j++) {
           // const nroRandom = Math.floor(Math.random() * 100) + 1;
            matriz[1].push(j)
        }
    }
    return matriz
}

let matrizGenerada = generar();
console.table(matrizGenerada);
/* 
Desarrollar una función que reciba la matriz generada y retorne en un array la primer columna.
*/
/* console.log(matrizGenerada[0][0]);
console.log(matrizGenerada[1][0]);
console.log(matrizGenerada[2][0]);
console.log(matrizGenerada[3][0]);
console.log(matrizGenerada[4][0]); */

function primerCol(matriz, col) {
    let arrayCol =[]
    for (let i = 0; i < matriz.length; i++) {
        arrayCol.push(matriz[i][col]);
    }
    return arrayCol;
}
console.log(primerCol(matrizGenerada, 0));





















/* Matriz cuadrada */

/* 
Desarrollar una función que reciba la matriz generada 
y retorne en un array la primer diagonal.

*/





// console.log(diagonal(matrizCuadrada));

/* 
Desarrollar una función que reciba la matriz generada y 
retorne en un NUEVO array la primer fila.
*/



/* 
console.log(primerFila(matrizCuadrada));
/* 


Desarrollar una función que reciba la matriz generada y retorne en un array la primer columna.
*/



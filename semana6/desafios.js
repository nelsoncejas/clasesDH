/* 
Desarrollar una función que genere una función de 5 x 5.

[
    [], // 0
    [],
    [],
    [],
    []
]
*/

/* Matriz cuadrada */
function matriz (tamaño)
{
    let cuadrada = [];
    let contador = 1;

    for (let f =  0; f < tamaño; f++)
     {
        cuadrada[f] = [];
        for (let c =  0; c < tamaño; c++)
        {
            cuadrada[f][c] = contador;  
            contador +=  1;         
        }   
    }
    return cuadrada;
}

let matrizCuadrada  =  matriz(5);

console.table(matrizCuadrada)

/* 
Desarrollar una función que reciba la matriz generada 
y retorne en un array la primer diagonal.

*/



function diagonal(matriz){
    let arrayDiagonal = []
    for (let i = 0; i < matriz.length; i++) {
        arrayDiagonal.push(matriz[i][i])
    }
    return arrayDiagonal;
}

// console.log(diagonal(matrizCuadrada));

/* 
Desarrollar una función que reciba la matriz generada y 
retorne en un NUEVO array la primer fila.
*/

function primerFila(matriz){
    let arrayPrimerFila = [];
    for (let i = 0; i < matriz.length; i++) {
        arrayPrimerFila.push(matriz[0][i])
    }
    return  arrayPrimerFila;
}

/* 
console.log(primerFila(matrizCuadrada));
/* 


Desarrollar una función que reciba la matriz generada y retorne en un array la primer columna.
*/


/* console.log(matrizCuadrada[0][0]);// 1
console.log(matrizCuadrada[1][0]);// 7
console.log(matrizCuadrada[2][0]);// 13
console.log(matrizCuadrada[3][0]);// 19
console.log(matrizCuadrada[4][0]);// 25  */

function primerCol(matriz, col){
    let arrayPrimerCol = [];
    for (let i = 0; i < matriz.length; i++) {
        arrayPrimerCol.push(matriz[i][col -1])
    }
    return  arrayPrimerCol;
}

// console.log(primerCol(matrizCuadrada, 2));

function primerColumna(matriz) {
    let arrayPrimerColumna = matriz[0]
 
    for (let i = 0; i < matriz.length; i++) {
        arrayPrimerColumna.push(matriz[i][0])
        
    }
    return arrayPrimerColumna
}
console.log(primerColumna(matrizCuadrada));

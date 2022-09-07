// let numeros = [1,'2','3','4']

let matriz = 
[
    ['a','a','a'], // 0
    ['b','0','b'], // 1
    ['c','c','c']  // 2
];

console.table('***************');
console.table(matriz);
console.table('***************');

// console.log(matriz.length); // 3

// console.log(matriz[0]); //  ['a','a','a']
// console.log(matriz[1]); //  ['b','b','b']
// console.log(matriz[2]); //  ['c','c','c']


/* for (let i = 0; i < matriz.length; i++) {
    const fila = matriz[i];
    // console.log(fila);
    for (let j = 0; j < fila.length; j++) {
        const elemento = fila[j];
    }
}
 */

//
/* for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(matriz[i][j]);;
    }
}
 */


function primerColumna(matriz) {
    let arrayPrimerColumna = matriz[0]
 
    for (let i = 0; i < matriz.length; i++) {
        arrayPrimerColumna.push(matriz[i][0])
        
    }
    return arrayPrimerColumna
}
console.log(primerCol(matrizCuadrada));

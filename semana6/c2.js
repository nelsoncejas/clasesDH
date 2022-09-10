let array = ['a','a','a'];

/* console.log(array);
console.log(array.length);
console.log(array[0]);

for (let i = 0; i < array.length; i++) {
    console.log(array[i])
} */

let matriz = 
[
    ['a','a','a'], // 0
    ['b','X','b'], // 1
    ['c','c','c']  // 2
];

// console.log(matriz.length);

console.table('***************');
console.table(matriz);
console.table('***************');



    //                i  i 
  /*   console.log(matriz[0][0]); // a
    console.log(matriz[1][1]); // X
    console.log(matriz[2][2]); // c */

/* function imprimirDiagonal(matriz){
    for (let i = 0; i < matriz.length; i++) {
        //console.log(i);
        console.log(matriz[i][i]);
    }
}

imprimirDiagonal(matriz) */
function recorrerTodosElementos(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        //const element = matriz[i];
        for (let j = 0; j < matriz[i].length; j++) {
            console.log(matriz[i][j]);
        }
    }
}

recorrerTodosElementos(matriz)
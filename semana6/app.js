/* 
    ?DUDAS
    ARRAY BIDIMENSIONAL ==> matriz
*/

let array = [1, 2, 3, 4, 5];

/* 
console.log(array.length);
console.log(array[0]);

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
} */

let matriz = [
    [2, 2, 2], // 0
    [2, 2, 2], // 1
    [4, 4, 4]  // 2
];

 console.table(matriz);
/*
console.log(matriz.length); */

/* console.log(matriz[0]);
console.log(matriz[1]);
console.log(matriz[2]); */

function acumuladorTotal(matriz){
    let acum = 0;
    for (let i = 0; i < matriz.length; i++) {
        //console.log(matriz[i]); // el array en iteracion ==> fila
        
        for (let j = 0; j < matriz[i].length; j++) {
            // console.log(matriz[i][j]);
            acum = acum + matriz[i][j]
            
        }
    }    
    return acum;
}

console.log(acumuladorTotal(matriz)); // total
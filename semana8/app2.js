/* 
    ALGORITMOS DE BUSQUEDAS
    * LINEAL 
    ? BINARIA
*/
let array = [4, 5, 6, 7, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20];

const busquedaLineal = (array, item) => {
    for (let i = 0; i < array.length; i++) {
        console.log('iteracion ' + (i + 1));
        if (item === array[i]) {
            return array[i]
        }
    }
    return null
}
// console.log(busquedaLineal(array, 11));
console.log(busquedaLineal(array, 20));

/* 
    ?EL ARRAY TIENE QUE ESTAR ORDENADO SI O SI
*/
let arrayOrdenado = [4, 5, 6, 7, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20];
let arrayDesordenado = [4, 5, 6, 7, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20];
                 // 🈯    
                 // 🆘              

const busquedaBinaria = (array, item) => {
    let inicio = 0;
    let final = array.length - 1
   
    let i = 1;
   
    while(inicio <= final){
        console.log('iteracionBin - '+ i++);
        let indiceMedio = Math.floor((inicio + final) / 2)
        let encontrado = array[indiceMedio]
        if (item === encontrado) {
            return encontrado
        }
        if (item > encontrado) {
            inicio = indiceMedio + 1
        }
        if (item < encontrado) {
            final = indiceMedio - 1
        }
    } 
    return null;
}

console.log('********* BINARIA ***************');
console.log(busquedaBinaria(arrayOrdenado, 20))
/* 
    ALGORITMOS DE BUSQUEDAS
    LINEAL 
    BINARIA
*/
let listDesordenada = [192, 2333, 3222, 4, 5, 6, 7, 7, 8, 9, 10, 11];


const busquedaLineal = (array, item) => {
    for (let i = 0; i < array.length; i++) {
        console.log(' i con lineal');
        if (item === array[i]) {
            return array[i]
        }        
    }
    return null
}



let listOrdenada = [4, 7, 8, 9, 10, 12, 100];
// console.log(busquedaLineal(listOrdenada , 100));

const busquedaBinaria = (array, item) => {
    let inicio = 0;
    let final = array.length - 1;

/*  
    const itemFinal = array[final]
    const itemInicio = array[inicio]
    if (item > itemFinal || item < itemInicio) {
        console.log(item + ' NO esta en el rango, vuelvas prontos');
        return null
    }
*/
 
    while(inicio <= final){
        let indiceMedio = Math.floor((inicio + final) / 2)

        const encontrado = array[indiceMedio]
        console.log('i');
        if (encontrado === item) {
            return indiceMedio
        }

        if (item > encontrado) {
            inicio = indiceMedio + 1
        }

        if (item < encontrado) {
           final = indiceMedio - 1
        }
    }

    return null

}

listDesordenada.sort((a,b) => a - b);

function order (array){
    for (let i = 0; i < array.length; i++) { // n
        for (let j = 0; j < array.length - 1; j++) { // n 
            //swap
        }
    }
}


console.table(listDesordenada);
console.log(busquedaBinaria(listDesordenada, 4))
/*console.log(busquedaBinaria(listOrdenada, 100))
console.log(busquedaBinaria(listOrdenada, 150))
console.log(busquedaBinaria(listOrdenada, 1)) */
// console.log(busquedaBinaria(listOrdenada, 5))
// console.log(busquedaBinaria(listOrdenada, 120))
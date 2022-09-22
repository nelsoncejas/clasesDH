/* 
Ejercicio 1
    Dado un array con los datos de una encuesta realizada sobre los temas musicales
    más populares —lo que se tiene en el array son objetos definidos con el nombre de
    un tema musical y cantidad de votos que obtuvo— crear el array con los datos de 5
    temas, crear los objetos con los temas que prefieran, y una cantidad de votos para
    cada uno.
    Los votos obtenidos están desordenados.

Escribir un algoritmo que, dado un tema, me informe cuántos votos obtuvo.
    a) Resolverlo aplicando búsqueda lineal.
    b) Resolverlo aplicando búsqueda binaria.

*/

let arrayTemasMusicales = [
    {
        nombre: 'Drivers license',
        votos: 7,
    },
    {
        nombre: 'Californication',
        votos: 10,
    },
    {
        nombre: 'STAY',
        votos: 2,
    },
    {
        nombre: 'Take Me Out',
        votos: 1,
    }, 
    {
        nombre: 'Mi bebito fiu fiu',
        votos: 2,
    }
]

function busquedaLin(array, nombreTema) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].nombre === nombreTema) {
            return array[i].votos
        }  
    }
    return null
}
/* console.log(busquedaLin(arrayTemasMusicales, 'Californication'));
console.log(busquedaLin(arrayTemasMusicales, 'STAY')); */

const order = (array) => {
    for (let i = 0; i < array.length; i++) { // n
        for (let j = 0; j < array.length - 1; j++) { // n
            if (array[j].nombre > array[j + 1].nombre) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}  
// O(n2)
// const cb = () => {} 

// 10 - 10 = 0
// 7 - 10 = -3
// console.table(arrayTemasMusicales);

// arrayTemasMusicales.sort((a,b) => a.votos - b.votos)

// console.log('Drivers license' > 'Californication'); // true

arrayTemasMusicales.sort((a,b) => {
    if (a.nombre > b.nombre) 
        return 1
    
    if (a.nombre < b.nombre) {
        return -1
    }
    return 0
})
// console.table(arrayTemasMusicales);
/* 
    console.table(arrayTemasMusicales);
    order(arrayTemasMusicales)
    console.table(arrayTemasMusicales);
*/
console.table(arrayTemasMusicales);

const busquedaBinaria = (array, nombreTema) => {
   let inicio = 0;
   let final = array.length - 1
   while (inicio <= final){
        const indiceMedio = Math.floor((inicio + final) / 2)
        let encontrado = array[indiceMedio];

        if (nombreTema === encontrado.nombre) {
            return encontrado.votos
        }
        if (nombreTema > encontrado.nombre) {
            inicio = indiceMedio + 1
        }
        if (nombreTema < encontrado.nombre) {
            final = indiceMedio - 1            
        }
   }

   return null
}
console.log(busquedaBinaria(arrayTemasMusicales, 'Californication'))
console.log(busquedaBinaria(arrayTemasMusicales, 'STAY'))
/* 

?-  CIERRE DE ALGORITMO

- COMPLEJIDAD ==> DOM 
- METODOS DE ARRAY
- CIERRE (RETRO 🌻)


Ejercicio 1
    Dado un array con los datos de una array realizada sobre los temas musicales
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
        nombre: 'Snow',
        votos: 7,
    },
    {
        nombre: 'Californication',
        votos: 10,
    },
    {
        nombre: 'Stay',
        votos: 2,
    },
    {
        nombre: 'Take Me Out',
        votos: 1,
    }, 
    {
        nombre: 'Otherside',
        votos: 2,
    }
];
// console.table(arrayTemasMusicales);
 const busquedaLineal = (array, nombreTema) => {
    for (let i = 0; i < array.length; i++) {
        console.log('itera' + i);
        if (nombreTema === array[i].nombre) {
            return array[i].votos
        }
    }
    return null;
}

// console.log(busquedaLineal(arrayTemasMusicales, 'Otherside'))


// console.log('STAY' > 'SNOW');
const order = (array)=>{
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j].nombre > array[j + 1].nombre) {
                let temp = array[j];
                array[j] = array[j + 1]
                array[j + 1] = temp; 
            }
        } 
    }
}
// console.table(arrayTemasMusicales);

/* order(arrayTemasMusicales)
console.table(arrayTemasMusicales); */


// 10 - 7 = +3
// 7 - 10 = -3
// 7 - 7 = 0

arrayTemasMusicales.sort((a, b) => {
    if (a.nombre > b.nombre) return 1
    if (a.nombre < b.nombre) return -1
    return 0
})

console.table(arrayTemasMusicales);

const busquedaBinaria = (array, tema) => {
    let inicio = 0
    let final = array.length - 1
   
    while (inicio <= final) {
        let im = Math.floor((inicio + final) / 2)
       
        let encontrado = array[im].nombre
       
        if (tema === encontrado){
            return array[im].votos
        }
        if (tema > encontrado){
            inicio = im + 1
        }
        if (tema < encontrado){
            final = im - 1
        }
    }
    return null
}


console.log(busquedaBinaria(arrayTemasMusicales, 'Snow'));
console.log(busquedaBinaria(arrayTemasMusicales, 'Mi bebito fiu fiu'));
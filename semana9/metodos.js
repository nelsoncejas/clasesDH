/* 
* PROGRAMACION FUNCIONAL

* mutabilidad
* funciones puras
* daño colateral

forEach 
map
filter
find
reduce
*/

/* let cb = function(element){
    console.log(element)
} */

// FOREACH

/* /* for (let i = 0; i < numeros.length; i++) {
    const element = numeros[i];
    console.log(element)
}

numeros.forEach(element => console.log(element)) */

/* numeros.forEach(function(element){
    console.log(element + 2)
})  */

// MAP

/* let dobles = numeros.map( pepe => pepe * 2 )

let dobles2 = numeros.map(function(e) {
    return e * 2
})

console.log(dobles);
console.log(numeros); */

// FILTER

/* let pares = numeros.filter(e => e % 2 === 0)
let mayores = numeros.filter(e => e > 50 )
console.log(pares);
console.log(mayores);  */

// FIND
/* 
let encontrado = numeros.find(e => e >50)
console.log(encontrado);
 */
// REDUCE

/* let ingresos = [10, 20, 3, 4, 5];

let total = ingresos.reduce((acc, elem) => {
    return acc + elem
}, 0)

console.log(total); */
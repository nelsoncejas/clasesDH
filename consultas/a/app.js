/* 
    ?Desarrollar una función que reciba 2 numeros y 
    ?retorne la suma de ambos, si el primer parametro es mayor, 
    ?caso contrario retornar la resta.
*/

function operacion(a, b) {
    if (a > b) {
        return a + b
    } else {
        return a - b
    }
}

/* let resultado = operacion(5 , 7);
console.log(resultado);

console.log(operacion(9 , 7));
console.log(operacion(7 , 7)); */

/* 
?Desarrollar una función que reciba 4 numeros y calcular la suma de total
    ?si el el resultado es par, retornar la mitad del total,  
    ? caso contrario retornar el doble del total.
   
    // DESARROLLAR CON ARROW Y TERNARIO
*/


function cuatroNumeros(a, b, c, d) {
    let res = a + b + c + d;
    if (res % 2 === 0) {
        return res / 2
    } else {
        return res * 2
    }
}


const cuatroNumeros2 = (a, b, c, d) => {
    let res = a + b + c + d;
    return res % 2 === 0 ? res / 2 : res * 2
}
/* 
console.log(cuatroNumeros2(3 , 6 , 2 , 1))
console.log(cuatroNumeros2(3 , 6 , 2 , 2)) */


/* 
Funcion que reciba un array de edades y retorne el promedio 
*/

let edades = [10, 9, 8, 22, 55, 80, 5, 63, 29, 9];
let edades2 = [10, 10];

function promedio2(arrayEdades) {
    //declaro una variable para ir acumulando el valor de la suma
    let acc = 0;
    for (let i = 0; i < arrayEdades.length; i++) {
        acc = acc + arrayEdades[i]
    }
    return acc / arrayEdades.length
}
// console.log(promedio2(edades));


const promedio = (arrayEdades) => {
    let acc = 0;
    for (let i = 0; i < arrayEdades.length; i++) {
        acc = acc + arrayEdades[i]
    }
    return acc / arrayEdades.length
}

// console.log(promedio(edades))


/* 
5 - 
    ? Funcion que reciba un array de edades y una edada buscar,
    ? retorne el primer índice si encuentra coincidencia o
    ? null caso contrario
*/

let edades3 = [10, 9, 8, 22, 55, 80, 5, 63, 29, 9];
// console.table(edades3);

function buscar(arrayEdades, edad) {

    for (let i = 0; i < arrayEdades.length; i++) {

        if (edad === arrayEdades[i]) {
            return i
        }
    }

    return null

}
/* 
console.log(buscar(edades3, 9));
console.log(buscar(edades3, 8));
console.log(buscar(edades3, 18)); */



/*
2 - Dado el Siguiente array de personasdesarrollar unciones:
  - Funcion que reciba el array de personas y liste el nombre de cada una. 
  - Funcion que reciba el array de personas y 
  retorne en un array los que son programadores.
  - Funcion que reciba el array de personas y un id a buscar, 
       retorne la persona en caso de encontrar, 
       caso contrario retorne null
  - Funcion que reciba el array de personas y un id a buscar, 
       retorne la persona en caso de encontrar, 
       caso contrario retorne null 

*/

let personas = [
    {
        id: 10,
        isProgrammer: true,
        age: 28,
        name: "Harrington Curry",
        company: "TRANSLINK",
        favoriteFruit: "strawberry"
    },
    {
        id: 90,
        isProgrammer: true,
        age: 38,
        name: "Greta Morton",
        company: "PYRAMI",
        favoriteFruit: "apple"
    },
    {
        id: 22,
        isProgrammer: false,
        age: 32,
        name: "Hester Bowen",
        company: "TURNABOUT",
        favoriteFruit: "apple"
    },
    {
        id: 123,
        isProgrammer: false,
        age: 25,
        name: "Melendez Mcfarland",
        company: "XSPORTS",
        favoriteFruit: "strawberry"
    },
    {
        id: 77,
        isProgrammer: false,
        age: 31,
        name: "Kimberly Matthews",
        company: "KNOWLYSIS",
        favoriteFruit: "banana"
    },
    {
        id: 5,
        isProgrammer: false,
        age: 36,
        name: "Hardin Sims",
        company: "SEALOUD",
        favoriteFruit: "banana"
    },
    {
        id: 6,
        isProgrammer: false,
        age: 29,
        name: "Natalia Huff",
        company: "ENERSOL",
        favoriteFruit: "apple"
    }
]
// console.table(personas); 

/* 
?Funcion que reciba el array de personas y un id a buscar, 
       ?retorne la persona (objeto literal) en caso de encontrar, 
       ?caso contrario retorne null
*/

function buscarPersona(arrayPersonas, id) {

    for (let i = 0; i < arrayPersonas.length; i++) {
        // console.log(typeof arrayPersonas[i].id)

        if (arrayPersonas[i].id === id) {
            return arrayPersonas[i]
        }
    }

    return null
}
/* console.log(buscarPersona(personas, 77))
console.log(buscarPersona(personas, 2)) */


function filtrarProgramadores(arrayPersonas) {

    let canasta = []
    for (let i = 0; i < arrayPersonas.length; i++) {
        // console.log(typeof arrayPersonas[i].id)

        if (arrayPersonas[i].isProgrammer === true) {
            canasta.push(arrayPersonas[i])
        }
    }

    return canasta
}


console.table(filtrarProgramadores(personas))
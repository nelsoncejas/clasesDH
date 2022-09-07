
// Brahian Puschiasis Camada 13

//Ejercicio 1: 

//Realizar una función que reciba por parámetro dos valores numéricos. Si ambos números recibidos son pares y distintos de 0 entonces se deberá retornar su división. 
//En cambio, si ambos números recibidos son impares entonces se deberá retornar la suma.

let parImpar = (a, b) => {
    if (a % 2 === 0 && b % 2 === 0 && a != 0 && b != 0) {
        return a / b;
    }
    else if (a % 2 !== 0 && b % 2 !== 0) {
        return a + b

    }
    else {
        console.log("No cumpliste ninguna de las anteriores")
    }
}

console.log(parImpar(9, 9))

//Ejercicio 2:

//Realizar una función que reciba dos valores por parámetro,  el primero un booleano y el segundo un número entero:

//Si el primer parámetro es true y el segundo es múltiplo de 5, deberá retornar el doble del segundo parámetro.


//Si el primer parámetro es true y el segundo no es múltiplo de 5, deberá retornar la mitad del segundo parámetro.


//Si el primer parámetro es false, deberá retornar el valor del segundo parámetro.

let ejercicio2 = (a, b) => {
    if (a === true && b % 5 === 0) {
        return b * 2;

    }
    else if (a === true && b % 5 !== 0) {
        return b / 2;

    }
    else if (a === false) {
        return b;

    }
}

console.log(ejercicio2(true, 55))

//Ejercicio 3:

//Dado el siguiente arreglo de objetos:

let articulos = [
    {
        id: 4,
        precio: 3321,
        tipo: "Deportivo",
        nombre: "Zapatillas"
    },
    {
        id: 22,
        precio: 4482,
        tipo: "Moda",
        nombre: "Zapatillas"
    },
    {
        id: 1,
        precio: 3600,
        tipo: "Moda",
        nombre: "Zapatos"
    },
    {
        id: 44,
        precio: 8889,
        tipo: "Moda",
        nombre: "Remera"
    },
]

//Realizar una función que reciba por parámetro el array de artículos, un string que represente al tipo (Deportivo o Moda) y  un valor numérico que represente al precio 
//máximo , deberá retornar un nuevo array con los artículos que cumplan con estas condiciones.

let articulosFiltrados = []

let filtrarArticulos = (arrayArticulos, tipo, precio) => {
    for (i = 0; i < arrayArticulos.length; i++) {
        if (arrayArticulos[i].tipo === tipo && arrayArticulos[i].precio <= precio) {
            articulosFiltrados.push(arrayArticulos[i])

        }


    }
    return articulosFiltrados;
}


console.log(filtrarArticulos(articulos, 'Moda', 5000))
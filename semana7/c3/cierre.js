/* 
 ?MATRIZ CON VALORES NUMERICOS

 ?ORDENAMIENTO DE UN ARRAY DE VALORES NUMERICOS
*/
const array1 = [4, 9, 2, 5, 6, 7, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2] // false

const array2 = [1, 2, 3, 4, 5, 6, 7, 8] // true

function ordenar(array) {
  for (let i = 0; i < array.length; i++) {
    // 9     >    2
    if (array[i] > array[i + 1]) {
      return false;
    }
  }
  return true;

}

/* 
console.log(ordenar(array1));
console.log(ordenar(array2));
*/

/* [
  []
  []
  []
] */

let generarMatriz = (a, b) => {
  let matriz = []
  let count = 1
  for (let i = 0; i < a; i++) {
    // matriz[i] = []
    matriz.push([])
    for (let j = 0; j < b; j++) {
      // matriz[i][j] = j
      matriz[i].push(count)
      count++;
    }

  }

  return matriz

}


// console.table(generarMatriz(3,7));


const personas =
  [
    {
      nombre: "Arlene Barr",
      legajo: 3955,
      edad: 33,
    },
    {
      nombre: "Roslyn Torres",
      legajo: 3925,
      edad: 27,
    },
    {
      nombre: "Cleo Lopez",
      legajo: 1965,
      edad: 34,
    },
    {
      nombre: "Daniel Malone",
      legajo: 3925,
      edad: 30,
    },
    {
      nombre: "Ethel Leon",
      legajo: 1915,
      edad: 34,
    },
    {
      nombre: "Harding Mitchell",
      legajo: 1905,
      edad: 25,
    }
  ]
console.table(personas);

const orderAscLegajo = array => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j].legajo > array[j + 1].legajo) {
        let temp = array[j];
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }
}
orderAscLegajo(personas)
console.table(personas);


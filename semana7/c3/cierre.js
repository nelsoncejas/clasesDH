/* 
 ?MATRIZ CON VALORES NUMERICOS

 ?ORDENAMIENTO DE UN ARRAY DE VALORES NUMERICOS
*/
const array1 = [4, 9, 20, 50, 6, 7, 1, 2, 5, 6, 7, 1, 2, 5, 6, 7, 1, 2, 5, 6, 7, 1, 2, 5, 6, 7, 1, 2, 5, 6, 7, 1, 2, 5, 6, 7, 1, 2] // false

const array2 = [1, 2, 3, 4, 5, 6, 7, 8] // true
function estaOrdenado(array) {
    for (let j = 0; j < array.length - 1; j++) {
        console.log(array[j]);
        if (array[j] > array[j + 1]) {
            return false;
        }
    }
    return true;
}

// console.log(estaOrdenado(array1));
// console.log(estaOrdenado(array2));
let matrizPrueba = [
    [],
    [],
    [],
]

matrizPrueba[0][0]

/* function generarMatriz(a,b){
    let matriz = []
    let contador = 1;
    for (let i = 0; i < a; i++) {
        matriz.push([])
        for (let j = 0; j < b; j++) {
            matriz[i].push(contador)
            contador++
        }
    }
    return matriz
}


console.table(generarMatriz(3,3)); */


/* function generarMatriz(fila, columna) {
    let matriz = []

    for (let i = 0; i < fila; i++) {
        matriz[i] = []
       
        for (let j = 0; j < columna; j++) {
            matriz[i][j] = (j + 1) * (i + 1)
        }
    }
    return matriz
}

console.log(generarMatriz(5, 5))
 */
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

const orderLegajo = (array, order) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (order === 'asc') {
                if (array[j].legajo > array[j + 1].legajo) {
                    let temp = array[j]
                    array[j] = array[j+1]
                    array[j+1] = temp
                }
            }else if(order === 'desc'){
                if (array[j].legajo < array[j + 1].legajo) {
                    let temp = array[j]
                    array[j] = array[j+1]
                    array[j+1] = temp
                }
            }
            
        }
    }
}


// orderLegajo(personas,"asc") // desc
// orderLegajo(personas,"asc")
// console.table(personas);


/* function swap(array, j) {
    let aux = array[j];
    array[j] = array[j + 1];
    array[j + 1] = aux;
  }
  
  function orderLegajo(array, propiedad, orden) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - 1; j++) {
        if ((orden === "desc")) {
          if (array[j][propiedad] < array[j + 1][propiedad]) {
            swap(array, j);
          }
        } else if ((orden === "asc")) {
          if (array[j][propiedad] > array[j + 1][propiedad]) {
            swap(array, j);
          }
        }
      }
    }
  } */
  
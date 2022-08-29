const edades = [10, 9, 8, 22, 55, 80, 5, 63, 29, 9]
const edades1 = [5, 9, 8]
const edades2 = [50, 80, 90, 60, 22, 15]

const repetido = arrayEdades => {
    let edadRepetida = []

    for (let i = 0; i < arrayEdades.length; i++) {
       const edad = arrayEdades[i];
       if (edadRepetida.includes(edad)) return true
       edadRepetida.push(edad)
    }

    return false
 }

 console.log(repetido(edades));
 console.log(repetido(edades1));


let names = ['Nelson', 'gabrieL', 'marTin']

 let toUpper = arr => {
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i].toUpperCase();
    }
    return arr;
}

console.log(toUpper(names))
console.log(names);
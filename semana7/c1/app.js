/* 
    SWAPPING
    Bubble Sort 
*/



/* 

let a = 15;
let b = 25;

let aux = a ; // 15

a = b
b = aux

console.log(a); // 25
console.log(b); // 15 */





/* let numeros = [6, 5, 1, 2];

console.log(numeros)

let aux = numeros[0] ; // 6

console.log(aux);
 numeros[0] = numeros[0 + 1]

console.log(numeros);

numeros[0 + 1] = aux; // 6

console.log('-----');
console.log(numeros)  */






/* 
let numeros = [1,20, 3, 5, 6, 8, 7]

console.log(numeros[1] + ' -- ' + numeros[1 + 1]);

function bubbleSort(array) {

    for (let i = 0; i < array.length; i++) { // 8

        for (let j = 0; j < array.length - 1; j++) { // 8
            //console.log(array[j] + ' -- ' + array[j + 1]);
            if (array[j] > array[j + 1]) {
                let temp = array[j] ;
                array[j] = array[j + 1];   
                array[j + 1] = temp;
            }            
        }
    }
} */

/* bubbleSort(numeros)

console.log(numeros)
 */

const arrayCuentas =
    [
        {
            titular: "Arlene Barr",
            estaHabilitada: false,
            saldo: 3253.40,
            edadTitular: 33,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Arlene Barr",
            estaHabilitada: false,
            saldo: 3253.40,
            edadTitular: 33,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Roslyn Torres",
            estaHabilitada: false,
            saldo: 3229.45,
            edadTitular: 27,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Cleo Lopez",
            estaHabilitada: true,
            saldo: 1360.19,
            edadTitular: 34,
            tipoCuenta: "corriente"
        },
        {
            titular: "Daniel Malone",
            estaHabilitada: false,
            saldo: 3627.12,
            edadTitular: 30,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Ethel Leon",
            estaHabilitada: true,
            saldo: 1616.52,
            edadTitular: 34,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Harding Mitchell",
            estaHabilitada: true,
            saldo: 1408.68,
            edadTitular: 25,
            tipoCuenta: "corriente"
        }
    ]
    
    let arrayAux = []
    arrayCuentas.forEach(elem => {
        
        if (arrayAux.find(e => e.titular === elem.titular)) {
            console.log(elem);
        }
        arrayAux.push(elem);

    });

  /*   function bubbleSort2(array) {

        for (let i = 0; i < array.length; i++) { // 8
    
            for (let j = 0; j < array.length - 1; j++) { // 8
                //console.log(array[j] + ' -- ' + array[j + 1]);
                if (array[j].saldo < array[j + 1].saldo) {
                   
                    let temp = array[j] ;
                    array[j] = array[j + 1];   
                    array[j + 1] = temp;

                }            
            }
        }
    }

    bubbleSort2(arrayCuentas)
    console.table(arrayCuentas); */

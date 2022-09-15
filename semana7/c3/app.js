/* 
    ?C20 - Más bubbleSort
*/
      // temp  = 6
const numeros = [6, 5, 1, 2, 4, 3, 8, 7];

function orderAsc(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                //SWAPP
                let temp = array[j];
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }
}

/* console.log(numeros);
console.log('ordenando...');
orderAsc(numeros);
console.log(numeros); */

function orderDesc(array, order){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] < array[j + 1]) {
                //swapp
                let aux = array[j];
                array[j] = array[j + 1];
                array[j + 1] = aux;
            }            
        }        
    }
}

/* console.log(numeros);
console.log('ordenando desc...');
orderDesc(numeros);
console.log(numeros); */



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
            titular: "Roslyn Torres",
            estaHabilitada: false,
            saldo: 3229.45,
            edadTitular: 27,
            tipoCuenta: "sueldo"
        },
        {
            titular: "CleoLopez",
            estaHabilitada: true,
            saldo: 1360.19,
            edadTitular: 34
            , tipoCuenta: "corriente"
        },
        {
            titular: "DanielMalone",
            estaHabilitada: false,
            saldo: 3627.12,
            edadTitular: 30,
            tipoCuenta: "sueldo"
        },
        {
            titular: "EthelLeon",
            estaHabilitada: true,
            saldo: 1616.52,
            edadTitular: 34,
            tipoCuenta: "sueldo"
        },
        {
            titular: "HardingMitchell",
            estaHabilitada: true,
            saldo: 1408.68,
            edadTitular: 25,
            tipoCuenta: "corriente"
        }
]
console.table(arrayCuentas);

function orderAscCuentas(arrayCuentas){
    for (let i = 0; i < arrayCuentas.length; i++) {
        for (let j = 0; j < arrayCuentas.length - 1; j++) {
            if (arrayCuentas[j].saldo > arrayCuentas[j + 1].saldo) {
                //SWAPP
                let temp = arrayCuentas[j];
                arrayCuentas[j] = arrayCuentas[j + 1]
                arrayCuentas[j + 1] = temp
            }
        }
    }
}
/* console.log('ordenando...');
orderAscCuentas(arrayCuentas)
console.table(arrayCuentas); */

function orderAscEdad(arrayCuentas){
    for (let i = 0; i < arrayCuentas.length; i++) {
        for (let j = 0; j < arrayCuentas.length - 1; j++) {
            if (arrayCuentas[j].edadTitular > arrayCuentas[j + 1].edadTitular) {
                //SWAPP
                let temp = arrayCuentas[j];
                arrayCuentas[j] = arrayCuentas[j + 1]
                arrayCuentas[j + 1] = temp
            }
        }
    }
}
/* console.log('ordenando...');
orderAscEdad(arrayCuentas)
console.table(arrayCuentas); */

function orderAscProp(arrayCuentas, prop){
    for (let i = 0; i < arrayCuentas.length; i++) {
        for (let j = 0; j < arrayCuentas.length - 1; j++) {
            if (arrayCuentas[j][prop] > arrayCuentas[j + 1][prop]) {
                //SWAPP
                let temp = arrayCuentas[j];
                arrayCuentas[j] = arrayCuentas[j + 1]
                arrayCuentas[j + 1] = temp
            }
        }
    }
}

console.log('ordenando Saldo...');
orderAscProp(arrayCuentas, 'saldo')
console.table(arrayCuentas);

console.log('ordenando edadTitular...');
orderAscProp(arrayCuentas, 'edadTitular')
console.table(arrayCuentas);
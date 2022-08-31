/* 
    C14 REPASO

a. Obtener en un nuevo array las edades menores a 18.
e. Obtener el mayor.
g. Incrementar en 1 todas las edades.

*/
const edades = [11, 12, 15, 18, 25, 22, 10, 33, 33, 5];
/* 
console.log(edades[0]); // 11
console.log(edades[1]); // 12 */

const menores = arrayEdades =>{
    let arrayAux = [];
    for (let i = 0; i < arrayEdades.length; i++) {
        if (arrayEdades[i] < 18) {
            arrayAux.push(arrayEdades[i])
        }

    }

    return arrayAux;
}

// console.log(menores(edades)); //[...edades menor a 18]
const mayor = arrayEdades =>{
    let mayor = arrayEdades[0];

    for (let i = 0; i < arrayEdades.length; i++) {
        if (mayor < arrayEdades[i]) {
            console.log(`${mayor} reasigno a ${arrayEdades[i]}`);
            mayor = arrayEdades[i]
        }
    }
    return mayor;

}

// console.log(mayor(edades)); // 33
function incrementar(arrayEdades){
    for (let i = 0; i < arrayEdades.length; i++) {
        //arrayEdades[i] += 2;
        arrayEdades[i] = arrayEdades[i] + 1;
         
    }
}

/* console.log(edades);
console.log('modificando...');
incrementar(edades); // que realice un incremento en todas las edaes
console.log(edades); */

function oddEven(arrayNums) {
    let nums ={
        impares: [],
        pares: []
    }
    
    for (let i = 0; i < arrayNums.length; i++) {
        if(arrayNums[i] % 2 === 0){
            nums.pares.push(arrayNums[i])
        } else {
            nums.impares.push(arrayNums[i])
        }
    }
    return nums
}

// console.log(oddEven(edades));


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
// console.table(arrayCuentas);

function cuentasHabilitadas(arrayCuentas){
    let cuentasHab = []
    for (let i = 0; i < arrayCuentas.length; i++) {
        if (arrayCuentas[i].estaHabilitada) {
            cuentasHab.push(arrayCuentas[i])
        }                        
    }
    return cuentasHab;
}
// console.table(cuentasHabilitadas(arrayCuentas))

function elMenor(arrayCuentas){
    let menor = arrayCuentas[0];
    for (let i = 0; i < arrayCuentas.length; i++) {
        if (menor.edadTitular > arrayCuentas[i].edadTitular) {
            menor = arrayCuentas[i]
        }                        
    } 
    return menor;
}

// console.log(elMenor(arrayCuentas))

/* C14 REPASO

 
 a. retorne en un nuevo array las edades menores a 18.
 e. retorne el mayor.  
 g. Incrementar en 1 todas las edades.

*/

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 2, 50];

function menores18(arrayEdades) {
    let arrayAux = [];
    
    for (let i = 0; i < arrayEdades.length; i++) {
       
        if (arrayEdades[i] < 18) {
            arrayAux.push(arrayEdades[i])
        }
    }

    return arrayAux;
}
//console.log(menores18(edades));// [... menores a 18]
const menores = (arrayEdades) => {
    let arrayAux = [];
    
    for (let i = 0; i < arrayEdades.length; i++) {
       
        if (arrayEdades[i] < 18){
            arrayAux.push(arrayEdades[i])
        }
    }

    return arrayAux;
}
// console.log(menores(edades));// [... menores a 18]


function mayorEdad(arrayEdades){
    const mayor = 0

    for (let i = 0; i < arrayEdades.length; i++) {
        if (arrayEdades[i] > mayor) {
            mayor = arrayEdades[i]
        }
    }
    return mayor
}

// console.log(mayorEdad(edades));

function incrementar(arrayEdades){

    for (let i = 0; i < arrayEdades.length; i++) {
        arrayEdades[i] = arrayEdades[i] + 1;
        // console.log(arrayEdades[i]);
    }
}

function incrementarEdades(edades) {
    let incrementar = [];
   
    for (let i = 0; i < edades.length; i++) {
        incrementar.push(edades[i] + 1);
    }

    return incrementar;
}

/*   console.log(incrementarEdades(edades))
  console.log(edades); */

/* console.log(edades);
console.log('modificando...');

incrementar(edades);
console.log(edades);
 */




/* 

Desarrollar una función llamada generarID que reciba como parámetro el array de cuentas y agregue a cada elemento (objeto literal) 
una propiedad llamada id con un valor Numérico diferente entre si

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

const generarID = (arrayCuentas)=>{
    for (let i = 0; i < arrayCuentas.length; i++) {
        arrayCuentas[i].id = i
    }
}
console.table(arrayCuentas);

generarID(arrayCuentas);
console.table(arrayCuentas);
/* 
 ?CLASE CONSULTA PROGRMACION IMPERATIVA 
*/

const fila1 = [4, 9, 2]
const fila2 = [3, 5, 7]
const fila3 = [1, 1, 6]

let matriz = [];
matriz.push(fila1, fila2, fila3)

// console.table(matriz);

/*
// ? PENSAMOS DE QUE FORMA ACCEDEMOS A LOS ELEM DE LA 1RA DIAG 
console.log(matriz[0][0]); // 4
console.log(matriz[1][1]); // 5
console.log(matriz[2][2]); // 6 */


// ? PENSAMOS DE QUE FORMA ACCEDEMOS A LOS ELEM DE LA 2DA DIAG 

/* 
console.log(matriz[0][2]); // 2
console.log(matriz[1][1]); // 7
console.log(matriz[2][0]); // 1
 
for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i][matriz.length - 1 - i]); // 4
} */

/* function sumarDiagonales(matriz){
    let acumulador = 0;
    let acumulador2 = 0;
    for (let i = 0; i < matriz.length; i++) {
        acumulador = acumulador + matriz[i][i]  
        acumulador2 = acumulador2 + matriz[i][matriz.length - 1 - i]  

        // acumulador += matriz[i][i]        
    }
    
    return [acumulador, acumulador2]
}

console.log(sumarDiagonales(matriz)); // [# ,#] */



/* function sumarDiagonal1 (array) {
    let suma1 = 0
    for (let i = 0; i < (array.length); i++) {
      suma1 += array [i] [i]
    } 
    let suma2 = 0

    for (let j = (array.length -1); j >= 0 ; j--) {
     
        console.log(j);
      suma2 += array [j] [j - 1]
    } 
    return [suma1, suma2]
  }
/*   
  function sumarDiagonal2 (array) {
    let suma2 = 0
    for (let j = (array.length -1); j >= 0 ; j--) {
      suma2 += array [j] [j]
    } return suma2
  } */

//   console.log(sumarDiagonal1(matriz));
//   console.log(sumarDiagonal2(matriz)); */


/* function sumarDiag(matriz) {
    let suma1 = 0
    let suma2 = 0
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            if (i === j) {
                suma1 += matriz[i][j];
            }
            if (i + j === matriz.length - 1) {
                suma2 += matriz[i][j];
            }
        }
    }
    return {suma1, suma2}
} */

/* const sumarDiagArrow = (matriz) => {
    let suma1 = 0
    let suma2 = 0
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            if (i === j) {
                suma1 += matriz[i][j];
            }
            if (i + j === matriz.length - 1) {
                suma2 += matriz[i][j];
            }
        }
    }
    return [suma1, suma2]
}

sumarDiag(matriz); */


const edades = [40,9,2,5,6,7,1,2] ;

// console.log(edades.sort());
// console.log(edades[edades.length - 1]);
const order = array => {
    for (let i = 0; i < array.length; i++) { 
       for (let j = 0; j < array.length - 1; j++) {
        if (array[j] > array[j + 1]) {
            //swapping
            let temp = array[j];
            array[j] =  array[j + 1];
            array[j + 1] = temp;
        } 
        
       }
     
    }
}

/* order(edades)
console.table(edades); */

let persona = {
    nombre: "Arlene Barr",
    legajo: 3955,
    edad: 33,
    saludar : function(){
        return 'hola soy ' + this.nombre
    }
}
console.table(persona);

console.log(persona.nombre);

console.log(persona.saludar());
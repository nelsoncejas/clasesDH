/* 
 CONSULTA  PROGRAMACIÓN IMPERATIVA - MARTIN 🧉 
*/

/* 
   ?Desarrollar una función que reciba 2 numeros y 
     
   ? - retorne la suma de ambos, si el primer parametro es mayor, 
   
   ? - caso contrario retornar la resta.
    
*/

function operacion(numA, numB){
    if (numA > numB)  {
        return numA + numB
    }else {
        return numA - numB
    }
}

const operacion2 = (numA, numB) => {
    if (numA > numB)  {
        return numA + numB
    }else {
        return numA - numB
    }
}



// condicion ? hace algo : hace otra cosa
const operacion3 = (numA, numB) => numA > numB ? numA + numB : numA - numB;


/* console.log(operacion);

console.log(operacion(5,3));

console.log(operacion(5,9));

console.log(operacion(9,9)); */



/* 
 ?Desarrollar una función que reciba 4 numeros y calcular la suma de total
     ?si el el resultado es mayor o igual a 7, retornar 'Aprobado', 
     caso contrario retornar 'otra chance '.
*/


function sumaTotal(a, b, c, d){
    //return a + b + c + d;
    let res = a + b + c + d;
   //console.log(res);
    if (res >= 7) {
        return 'Aprobado'
    }else{
        return 'Otra chance'
    }
}

/* console.log(sumaTotal(1,3,2,3))

console.log(sumaTotal(1,2,2,1))


for (let i = 0; i < 14; i++) {
    console.log(i);
} */

/* 
? Funcion que reciba un array de edades y una edada buscar, 
 ?retorne el primer índice si encuentra coincidencia o 
 ?null caso contrario
*/

const edades = [10, 9, 8, 22, 55, 80, 5, 63, 29, 9];
            //  0   1  2  3   4   5   6  7   8   9

/* console.table(edades)
console.log(edades[0])
console.log(edades[1])
console.log(edades[2])
console.log(edades[3])
console.log(edades[4])
console.log(edades.length) */

function buscar(arrayEdades, edad) {
    // i = i + 1
    for (let i = 0; i < arrayEdades.length; i++) {
        
        if (arrayEdades[i] === edad) {
            return i
        }
    }
    return null

   
}

function buscar3(arrayEdades, edad) {
    if (arrayEdades.indexOf(edad) === -1) {
        return null
    }
    return arrayEdades.indexOf(edad)  
}

/* function buscar2 (arr, edad){
    
    for (let i = 0; i< arr.length; i++) {
    
        if(arr[i] == edad ){
            return i        
        }
    }
    return null

}; */


/* 
console.log(buscar3(edades, 9)); // 1 OKEY

console.log(buscar3(edades, 19)); // null */

/* 
1 - Desarrollar un objeto literal que contenga 5 propiedades que sean del siguiente tipo:
   - 2 String   
   - 1 Boolean
   - 1 Number
   - 1 Array
   - 1 Metodo que retorne un saludito
    * por ejemplo:
    
     let canHijo = {
       nombre : 'Negrito',
       color  : 'Negrito',
       estaVacunado : true,
       edad : 10,
       vacunas : ['Leptospirosis', 'Hepatitis', 'Parvovirus'],
       saludo: function(){
           return 'wouf wouf wouf..'
       } 
     }
    
  - Luego desarrollar una funcion que liste individualmente los elementos de
   la propiedad del tipo Array 
*/

let canHijo = {
    nombre : 'Negrito',
    color  : 'Negrito',
    estaVacunado : true,
    edad : 10,
    vacunas : ['Leptospirosis', 'Hepatitis', 'Parvovirus'],
    saludo: function(){
        return 'wouf wouf wouf..'
    } 
}

function listaArray(array) {    
    //console.log(array);
    for (let i = 0; i < array.length ; i++) {
      console.log(array[i])    
    } 
}

listaArray(canHijo)

/* 
 CIERRE SEMANA 3
 *Operadores lógicos
 *Condicionales: If/else - If Ternario / Switch
 *For loop / while / do while
*/

/* 
En este ejercicio nuestra tarea es completar la función noParesDeContarImparesHasta. 
?Esta función recibe un número X por parámetro y cuenta la cantidad de números impares que hay desde el número 0 hasta el número X (inclusive) y luego RETORNA ese valor. Para 

!resolver la ejercitación debemos utilizar el for .

*/

/* let a = 'Zapato' == 'trampa';
console.log(a);// false

let b =  "chau" <= "hola";
console.log(b); 

console.log(1 && 'Luna' && 'Martin')
console.log(1 || 'Luna')
*/

function noParesDeContarImparesHasta(nro){

    let contador = 0;

    for (let i = 0; i <= nro; i++) {
        
        if (i % 2 === 0) {
            contador++ 
        }
                
    }

    return contador;
}


console.log(noParesDeContarImparesHasta(10))
console.log(noParesDeContarImparesHasta(20))
console.log(noParesDeContarImparesHasta(3))
console.log(noParesDeContarImparesHasta(3))


/* 
Elaborar un programa que muestre la cantidad de números pares e impares entre 2 números.
*/
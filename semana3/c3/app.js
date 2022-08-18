/* 
 CIERRE SEMANA 3
 *Operadores lógicos
 *Condicionales: If/else - If Ternario / Switch
 *For loop / while / do while
*/
/* 
En este ejercicio nuestra tarea es completar la función noParesDeContarImparesHasta. 
?Esta función recibe un número X por parámetro y cuenta la cantidad de números impares que hay desde el número 0 hasta el número X (inclusive) y luego RETORNA ese valor. Para resolver la ejercitación debemos utilizar el for .
*/

function noParesDeContarImparesHasta(numero) {
    let cantImpares = 0;

    for (let i = 0; i <= numero; i++) {

        if (i % 2 !== 0) {
            cantImpares++
        }

    }
    return cantImpares;
}


console.log(noParesDeContarImparesHasta(9)) // imprime por pantalla el valor 2, que se obtiene de contar 1 y 3. Los valores 0, 2 y 4 no los contabiliza por ser números pares.


/* 
function nParesDeContarImparesHasta(numero) {
    if (numero % 2 <= 0) {
        console.log((numero / 2))
    } else (console.log((numero / 2) + 0.5))
}

nParesDeContarImparesHasta(9) */

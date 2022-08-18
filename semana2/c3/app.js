/* 
    CIERRE SEMANA
    ?DUDAS de PG 
    Mesa de Trabajo
*/

/* 

?Desarrollar una función que recibe 4 parámetros numéricos

?calcular él promedio

?verifique 
 si el promedio es mayor o igual a 7 y retorne true,
 caso contrario retorne false

*/

function promedio(a,b,c,d){

    let promedio = (a+b+c+d) / 4 

    console.log('promedio ' + promedio);

    return promedio >= 7;   
}

let promedioFlecha = (a,b,c,d) => (a+b+c+d) / 4  >= 7;

 console.log(promedioFlecha(10,10,10,6));
/*

console.log( 'Hola tu promedio es' + promedio(3,4,5,6) + ':)');

console.log(` Hola tu promedio es ${promedio(3,4,5,6)} `); */

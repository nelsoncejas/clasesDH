/* 
CLASE 7 
    0 - DUDAS
    ?1 - OPERADORES
        //aritmeticos, modulo %
        comparación === == < >
        lógicos && || !
   ?2 - IF ELSE
   
   ?3 - IF TERNARIO, SWITCH

*/
//console.log(15 % 3); // 4 / 2 = 2  ===> resto 0

// comparación == != ; === !== ;  < > <= >=

/* console.log(3 == 3);
console.log(3 == '3');
*/

/* ! == ; ! =  
    console.log(3 != '3');
    console.log(3 !== 5);
    console.log('3' === '3');
*/
// console.log(3 >= 3);


// lógicos && || !

/*   let a = 3 === '3'; 
  console.log(a);
  
  let b = 3 < 4;
  console.log(b);

  let c = 3 >= 3;
  console.log(c);

  console.log('Exp final');

  console.log(3 === '3' && 3 < 4 && 3 >= 3); 

  console.log(3 === '3' || 3 > 4 || 1 >= 3);*/

/* let a = 3 === '3';
console.log(!a); */

//console.log(!a);
// console.log(!false);


//    console.log(true && false && true);

// IF,  ELSE IF


/* if (nombre === 'Tom') {
    console.log('Hola soy Tom');
}else{
    console.log('Hola no soy Tom');
}
 */

/* if (nombre === 'Tom') {

    console.log('Hola soy Tom');

} else if (nombre === 'Negrito') {

    console.log('Hola soy Negrito');

} else {
    console.log('Hola soy no se quien soy');

}


switch (nombre) {
    case 'Tom':
        console.log('Hola soy Tom');
        break;
    case 'Negrito':
        console.log('Hola soy Negrito');
        break;

    default:
        console.log('Hola soy no se quien soy');
} */

// Exp ? caso verdadero : caso contrario

let nombre = 'Negrito';    

nombre = 'Tom' ? console.log('Hola soy Tom') : console.log('Hola NO soy Tom');




















/* 
EJERCITACIÓN DE CLASE 

¿Puede subir?
En un parque de diversiones nos piden un programa para verificar si los pasajeros de la montaña rusa pueden subir al juego. 

//?Crear una función puedeSubir() que reciba dos parámetros: altura de la persona y si viene acompañada .
 
//?Debe retornar un valor booleano (TRUE, FALSE) que indique si la persona puede subirse o no, basado en las siguientes condiciones:

//?Debe medir máyor o igual de 1,40m Y menor de 2 metros.

//?Si mide menos de 1,40m hasta 1.20m, deberá venir acompañado.

?Si mide menos de 1,20m, no podrá subir ni acompañado.

Modificar la función para impedir la subida al juego si la persona fue penalizada por no respetar las normas y reglas del juego.

*/


function puedeSubir(altura, vieneAcom){
    if(altura >= 1.4 && altura < 2){ // pasa ok
        return true
    }else if (altura < 1.4 && altura >= 1.2 && vieneAcom === true) { // pasa pero si viene acomp
        return true
    }else{ // no pasa nunca
        return false
    }
    
}

console.log('puedeSubir(1.7, true)');
console.log(puedeSubir(1.7, false));

console.log('puedeSubir(1.3, true)');
console.log(puedeSubir(1.3, true));
console.log(puedeSubir(1.3, false));


console.log('puedeSubir(1.1, true)');
console.log(puedeSubir(1.1, true));
console.log(puedeSubir(2, true));
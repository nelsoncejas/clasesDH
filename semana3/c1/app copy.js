/* 
CLASE 7 
    //0 - DUDAS 
    ?1 - OPERADORES
        //aritmeticos, modulo %
        comparación === == < >
        lógicos && || !
   ?2 - IF ELSE
   
   ?3 - IF TERNARIO, SWITCH

*/
// comparación === !== == != < > <= >=


/* console.log(4 == '3');
console.log('4' == '4');
console.log(true == true); */


/* console.log(4 === '4')
console.log(4 === 4) */

/* console.log(4 >= 4)
console.log(4 >= 4)
console.log(4 > 3)
console.log(1 < 4) */

// console.log(true && (3 == '4') && (4 >= 4)) 

/* 
console.log(!3 == '4');
console.log(true);
*/

// console.log(4 % 2); // 15 / 3 = 5    % ==> resto  0


/* if (!(3 > 8)) {
   console.log('SI'); 
} */

/*  if (3 > 8) {
   console.log('SI'); 
    
} else {
   console.log('No'); 
    
}  */

/* if (3 > 8) {
    console.log('SI');
}else if (4 === '4') {
    console.log('SI 2');
}else{
    console.log('NO SE CUMPLE NINGUNA COND');
}

let nombre = 'Negrito';

switch (nombre) {
    case 'Luna':
        console.log('Es luna');
        break;
    case 'Tom':
        console.log('Es Tom');
        break;
    default:
        console.log('NO SE CUMPLE NINGUNA COND');
} */

/* 
¿Puede subir?
En un parque de diversiones nos piden un programa para verificar si los pasajeros de la montaña rusa pueden subir al juego. 
?Crear una función puedeSubir() que reciba dos parámetros: altura de la persona y si viene acompañada.
 
?Debe retornar un valor booleano (TRUE, FALSE) que indique si la persona puede subirse o no, basado en las siguientes condiciones:

?Debe medir máyor o igual de 1,40m Y menos de 2 metros.

?Si mide menos de 1,40m hasta 1.20m, deberá venir acompañado.

? Si mide menos de 1,20m, no podrá subir ni acompañado.

 Modificar la función para impedir la subida al juego si la persona fue penalizada por no respetar las normas y reglas del juego.

*/

function puedeSubir(altura, vieneAcom, penalizado){
    
    if (penalizado) {
        return false
    }
    
    if (altura >= 1.4 && altura < 2) {
        return true
    }
    
    if (altura < 1.4 && altura >= 1.2 && vieneAcom === true) {
        return true
    }

    if (altura < 1.2) {
        return false
    }
}

console.log('puedeSubir(1.7 , false)');
console.log(puedeSubir(1.7 , false, true)); 

console.log('puedeSubir(1.2 , false)');
console.log(puedeSubir(1.2 , true));

console.log('puedeSubir(1.1 , false)');
console.log(puedeSubir(1.1 , true));


console.log('puedeSubir(2 , false)');
console.log(puedeSubir(2.2 , true));
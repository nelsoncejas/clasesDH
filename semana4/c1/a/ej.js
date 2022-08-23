
/* 
Desarrollar una función que realice la verificación de cada elemento del array de correos pendientes. 

?En caso de validar, agregar al arrayCorreoAdmitidos. 
?Caso contrario, agregar al arrayCorreoDescartados 

*(vaciar el array de correos pendientes).

Mostrar por pantalla la cantidad y los elementos de cada array.

*/

let arrayCorreosPendientes = [
    'iroman@digitalhouse.com', 'loki%digitalhouse.com', 'loki@digitalhouse.com', 'thanosdigitalhouse.com', 'thanos@digitalhouse.com'];
/* array de correos admitidos */




let arrayCorreosAdmitidos = [
    'thor@digitalhouse.com',
    'tucuMan@digitalhouse.com',
    'wanda@digitalhouse.com'
];

let arrayCorreosDescartados = [];

 

function verificarCorreo(correos) {
    //tu código   
    for (let i = 0; i < correos.length; i++) {
        // console.log(correos[i]);
        // const correo = correos[i];
        //miTexto.indexOf(textoABuscar): 
        //console.log(correos[i].indexOf('@'));
        if (correos[i].indexOf('@') !== -1) {
            arrayCorreosAdmitidos.push(correos[i])
        } else {
            arrayCorreosDescartados.push(correos[i])
        }
    }
    arrayCorreosPendientes = [];
}



verificarCorreo(arrayCorreosPendientes)

 console.log("--- Array de correos admitidos: " + "longitud de array " + arrayCorreosAdmitidos.length);
 console.log(arrayCorreosAdmitidos);
 console.log();
 console.log("---Array de correos Descartados:"+  "longitud de array " + arrayCorreosDescartados.length);
 console.log(arrayCorreosDescartados);


 console.log(arrayCorreosPendientes);
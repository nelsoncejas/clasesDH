/* 
Elaborar un programa que simule una clave de acceso. Si el
usuario es: "ADMIN" y la clave "123456" mostrar el mensaje
"ACCESO PERMITIDO". Caso contrario, mostrar el mensaje
!"ACCESO DENEGADO".


exp ? 'SI' : 'NO'
*/
/* 
 //ASas
*/

const login = (user, pass ) => {

    let exp = user === 'AdmiN' && pass === '123456' 
    
    /* if (user === 'AdmiN' && pass === '123456') {
        console.log('ACCESO PERMITIDO');
    }else{
        console.log('ACCESO DENEGADO');
    } */
    
    return exp ? 'ACCESO PERMITIDO' : 'ACCESO DENEGADO'
    

}

console.log(login('AdmiN', '123456'))

login('admin', '123456')

login('ADMIN', '12345')
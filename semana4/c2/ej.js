/* 

*/

/* let persona = {
    nombre: 'Cosme Literal',
    edad: 29,
    esMayorDeEdad: true
}

persona.nombre = 'Martín'
persona.profesion = 'Programador'

console.log(persona) */
 

/* 
Apple 355.080
Amazon 350.273
Google 263.425
Microsoft 184.245
Walmart 111.918
*/

let nombreMarcas = ['Apple', 'Amazon', 'Google', 'Microsoft', 'Walmart'];
let valores = [355.080, 350.273, 263.425, 184.245, 111.918]


//Walmart : 111.918
// console.log( nombreMarcas[4] + ': ' +valores[4] );




/*  let array = [ 
    {} ,
    {}
 ]
 */

let marcas = [
    {
        nombre :'Apple', 
        valor: 355.080
    },
    {nombre :'Amazon', valor: 350.273} ,
    {nombre :'Google', valor: 263.425} ,
    {nombre :'Microsoft', valor: 184.245} ,
    {nombre :'Walmart', valor: 111.918}
] 




function buscarPorMarca(nombreMarca, arrayMarcas){
    
    for (let i = 0; i < arrayMarcas.length; i++) {
        if (nombreMarca === arrayMarcas[i].nombre) {
            return arrayMarcas[i]
        }   
    }

}

console.log(buscarPorMarca('Google', marcas))


function loro(texto){
    for (let i = 0; i < 5; i++) {
       console.log(texto);
    }
}
loro('h')
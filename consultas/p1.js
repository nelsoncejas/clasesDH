/*  
Realizar una función que reciba por parámetro dos valores numéricos. 
Si ambos números recibidos son pares entonces se deberá retornar el resultado de restarle al primer parámetro el segundo. 
Si alguno o los dos no son pares , se deberá retornar un string que diga “Lo siento, uno de los parámetros no es par”

*/
const restarPares = (a,b) => a % 2 === 0 && b % 2 === 0 ? a - b : 'Lo siento, uno de los parámetros no es par';

console.log(restarPares(2,2));
console.log(restarPares(2,3));
/* 
Debemos poder controlar el acceso a un recital de música para una determinada persona. Para eso, debemos realizar una función que reciba dos parámetros
La edad de la persona
Si tiene o no, el ticket de entrada
La función deberá evaluar las siguientes condiciones y retornar en cada caso lo que se pida:
Si tiene entrada y es mayor o igual de 18 años: retorna un booleano dando a entender que si puede acceder.
Si tiene entrada pero es menor de 18 años: retorna un string que diga “Sólo puedes acceder con un adulto acompañante”.
Si no tiene entrada: retorna un booleano dando a entender que no puede acceder.

*/

const puedePasar = (edad, ticket)=>{
    if (!ticket) return false
    return edad >=18 ? true : 'Sólo puedes acceder con un adulto acompañante'
}

console.log(puedePasar(18,false));
console.log(puedePasar(18,true));
console.log(puedePasar(14,true));
/* 
Dado el siguiente arreglo de objetos: 

Realizar una función que reciba un array como parámetro, y lo recorra para filtrar los productos que sean de tipo “tecnologia” y que su precio sea mayor o igual a 50000, la función deberá retornar un nuevo arreglo con los productos que cumplan con las condiciones antes mencionadas.
*/
let productos = [
    {
        producto : "remera",
        tipo: "indumentaria",
        precio: 21
    },
    {
        producto : "notebook",
        tipo: "tecnologia",
        precio: 200000
    },
    {
        producto : "celular",
        tipo: "tecnologia",
        precio: 27000
    },
    {
        producto : "protector solar",
        tipo: "cosmetica",
        precio: 2500
    },
    {
        producto : "pantalon",
        tipo: "indumentaria",
        precio: 7500
    },
    {
        producto : "tablet",
        tipo: "tecnologia",
        precio: 60000
    },
   
]

const filtrar = (arrayProductos)=>{

}
Armesto
Reyes Tejeria
Pazos
Bello
Rostán
Sereno
Acosta
Bicca
Crocco
Molina
Ansaldi
Rodriguez
Correa
Robaina
Pérez Graces
Pereira
PALERMO
Rodríguez
Lauga
Marrero
Mosquera
Perez
Viltre Castellanos
Parada
Cancela
Ripoll
de la Barrera
CAMANDULLE
Silva
Aranivar
Abila
DA COSTA LEITES LUZ
Zeballos
Benítez
Pere
Rocha
Suarez
Ramos
Faccio
Guerra
CALASSO MACHIN
Robaina
Puschiasis
Gonzalez
Bianchi
Bertone Gonzalez
Gimenez
Balsemao Azar
Contreras
Listur
Rodriguez
Rincón
















































































































































































































































































































































































































































































































































































































































































































































































































































































































































































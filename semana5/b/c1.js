/* 
EJERCITACIÓN C13

1) Crear un array llamado misMascotas

2) Dentro de este array crearemos un objeto literal para cada mascota. Cada
objeto deberá tener:
● nombre
● raza
● edad
● sonido

crear una funcion que nos retorne ese sonido 1 veces

Cuando esté listo, verificar en consola
3) Deberemos crear una función que se llame aumentarEdad que aumente la
edad de cada animal en 1.
4) Ahora debemos crear otra función, que se llame aumentarEdad2, que va a
hacer un trabajo más fino:
● Si la mascota tiene menos de 6 años, debe aumentar su edad en 1
● Si la mascota tiene entre 6 y 10 años, debe aumentar su edad en 2
● Si la mascota tiene más de 10 años, deberá sumarle la mitad de su edad
5) Ahora crearemos una función que va a generar un identificador (ID) en cada
objeto, que será secuencial y que empezará en 1.
6) Por último eliminaremos la propiedad ‘raza’ , ya que para nosotros todos los
animalitos son iguales
*/

const mascota = {
    nombre: 'Tom',
    raza: 'Dogo',
    edad: 10,
    sonido: 'wouf',
    saludar: function () {
        return this.sonido + ' ' + this.sonido
    }
}

delete mascota.raza

// console.log(mascota.saludar())

const mascotas = [
    {
        nombre: 'Tom',
        raza: 'Dogo',
        edad: 11,
        sonido: 'wouf',
    },
    {
        nombre: 'Negrito',
        raza: 'petisito',
        edad: 10,
        sonido: 'guau ',
    },
    {
        nombre: 'Firulais',
        raza: 'Dalmata',
        edad: 8,
        sonido: 'auf',
    },
    {
        nombre: 'Mimi',
        raza: 'gato',
        edad: 5,
        sonido: 'miau',
    },
    {
        nombre: 'Nala',
        raza: 'Criolla',
        edad: 1,
        sonido: 'miau',
    },
    {
        nombre: 'tita',
        raza: 'perro',
        edad: 8,
        sonido: 'wuaaa',
    }
]
/* 
console.table(mascotas);
// console.log(mascotas.length);
console.table(mascotas[4]);
 */
/* 
Deberemos crear una función que se llame aumentarEdad que aumente la
edad de cada animal en 1,


*/

function aumentarEdad(arrayMascotas){
    for (let i = 0; i < arrayMascotas.length; i++) {
        arrayMascotas[i].edad++
    }
}
/* console.table(mascotas);

console.log('MODIFICANDO EDADES....');
aumentarEdad(mascotas);

console.table(mascotas); */
/* 
Ahora debemos crear otra función, que se llame aumentarEdad2, que va a
hacer un trabajo más fino:
?● Si la mascota tiene menos de 6 años, debe aumentar su edad en 1
?● Si la mascota tiene entre 6 y 10 años, debe aumentar su edad en 2
?● Si la mascota tiene más de 10 años, deberá sumarle la mitad de su edad
*/


function aumentarEdad2(arrayMascotas){
    for (let i = 0; i < arrayMascotas.length; i++) {
       
      
        if (arrayMascotas[i].edad < 6) {
            arrayMascotas[i].edad++ // ==>arrayMascotas[i].edad = arrayMascotas[i].edad + 1 
        }else if(arrayMascotas[i].edad >= 6 && arrayMascotas[i].edad <= 10){
            arrayMascotas[i].edad = arrayMascotas[i].edad + 2
            //arrayMascotas[i].edad +=  + 2 
        }else{
            arrayMascotas[i].edad = arrayMascotas[i].edad + (arrayMascotas[i].edad / 2)
        }

    }

}

/*

console.table(mascotas);

console.log('MODIFICANDO EDADES....');
aumentarEdad2(mascotas);

console.table(mascotas);  

*/
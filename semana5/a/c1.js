/* 
EJERCITACIÓN C13

1) Crear un array llamado misMascotas

2) Dentro de este array crearemos un objeto literal para cada mascota. Cada
objeto deberá tener:
● nombre
● raza
● edad
● sonido
● un método que nos retorne ese sonido 2 veces
Cuando esté listo, verificar en consola
3) Deberemos crear una función que se llame aumentarEdad que aumente la
edad de cada animal en 1.
?4) Ahora debemos crear otra función, que se llame aumentarEdad2, que va a
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
};

delete mascota.raza
// console.log(mascota.saludar())

const mascotas = [
    
    {
        nombre: 'Tom',
        raza: 'Dogo',
        edad: 10,
        sonido: 'wouf',
    },
    { nombre: "Tony", raza: "Gato", edad: 2, sonido: "miau miau" },
    { nombre: "Tato", raza: "desconocida", edad: 1, sonido: "miau miau" },
    {
        nombre: 'Otto',
        raza: 'Barbillón',
        edad: 1,
        sonido: 'Dame comida'
    },
    {
        nombre: "Nala",
        raza: "husky",
        edad: 12,
        sonido: "wouf wouf",

    }
];

/* 
3) Deberemos crear una función que se llame aumentarEdad que aumente la
edad de cada animal en 1. 
*/



function aumentarEdad(arrayMascotas){
  /*   
    arrayMascotas[0].edad++
    arrayMascotas[1].edad++
    arrayMascotas[2].edad++
    arrayMascotas[3].edad++
    arrayMascotas[4].edad++ 
    */
    for (let i = 0; i < arrayMascotas.length; i++) {
        arrayMascotas[i].edad++
    }
}

/* console.table(mascotas);
console.log('MODIFICANDO.....')

aumentarEdad(mascotas)

console.table(mascotas); */




// console.log(mascotas.length);


/* 
4) 
?Ahora debemos crear otra función, que se llame aumentarEdad2, que va a
hacer un trabajo más fino:
?● Si la mascota tiene menos de 6 años, debe aumentar su edad en 1
?● Si la mascota tiene entre 6 y 10 años, debe aumentar su edad en 2
?● Si la mascota tiene más de 10 años, deberá sumarle la mitad de su edad

*/

const aumentarEdad2 = (arrayMascotas) =>{
    
    for (let i = 0; i < arrayMascotas.length; i++) {
        // const mascota = arrayMascotas[i];
        
        if (arrayMascotas[i].edad < 6) {
            arrayMascotas[i].edad++
        }else if(arrayMascotas[i].edad >= 6 && arrayMascotas[i].edad <= 10){
            arrayMascotas[i].edad = arrayMascotas[i].edad + 2
        }else{
            arrayMascotas[i].edad = arrayMascotas[i].edad + (arrayMascotas[i].edad / 2) 
        }
    }
}

console.table(mascotas);
console.log('MODIFICANDO.....')
aumentarEdad2(mascotas)

console.table(mascotas);



/* 
  ? Objeto Literales C11
*/


let numeros = [1,2,3]


let persona = {
    nombre : 'Homer',
    edad : 43,
    trabaja: true,
    saludar: function (){
        return 'hola soy ' + this.nombre;
    },
    nombre2 : 'Lisa',
    nombre3 : 'Bart'

}

let personas = [  
    {
        nombre : 'Homer',
        edad : 43,
        trabaja: true,
        saludar: function (){
            return 'hola soy ' + this.nombre;
        },
    },
    {
        nombre : 'Homer',
        edad : 43,
        trabaja: true,
        saludar: function (){
            return 'hola soy ' + this.nombre;
        },
    },      
]



/* persona.nombre = 'Bart'
persona.nombre = 'Lisa' */
persona.edad = 12

console.log(persona);
/* 

console.log(persona.edad);

console.log(persona['nombre']); */
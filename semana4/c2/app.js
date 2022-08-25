/* 
  ? Objeto Literales C11
  sintaxis
  manipulación

  *Array de objetos literales
*/

let persona = {
  
  nombre: 'Homero',
  edad : 44,
  estaEnEscena: true,

  saludar : function(tiempo){
     return 'Hola soy ' + this.nombre + ', Buenas ' + tiempo
  },
  puntajes: [2, 3, 4, 10 ],

}

let personas = [
  {
    nombre: 'Homero',
    edad : 44,
    estaEnEscena: true,
    puntajes: [2, 3, 4, 10 ],
  },
  {
    nombre: 'Marge',
    edad : 44,
    estaEnEscena: true,
    puntajes: [2, 3, 4, 10 ],
  },
  {
    nombre: 'Lisa',
    edad : 44,
    estaEnEscena: false,
    puntajes: [2, 3, 4, 10 ],
  }
]

console.log(personas[0].nombre);
console.log(personas[1].nombre);
console.log(personas[2].nombre);

/* /* 
 1 KAHOOT
 2 DUDAS
 3 Ejercitación

*/

/* let numeros = [1,2,3,'ultimo elemento']
//numeros.length = 4
// (i++) no es exactamente igual (i = i + 1)

console.log(numeros[numeros.length - 1]); */

/* 
2 - 
    ? Desarrollar una función que reciba 2 numeros y 
    ? retorne la suma de ambos, si el primer parametro es mayor, 
    ? caso contrario retornar la resta.
*/

function sumaOResta(nroA, nroB) {      
    let calculo = 0;
    
    if (nroA > nroB) {
        calculo =  nroA + nroB
    }else {
        calculo = nroB - nroA   
    }  
    return calculo;
}
let sumaR = (nroA, nroB) => nroA > nroB ? nroA + nroB : nroB - nroA;

/* console.log(sumaR(5, 2))
console.log(sumaR(5, 20))
console.log(sumaR(5, 5)) */



/* 
    ?Funcion que reciba el array de personas y un id a buscar, 
    ?retorne la persona en caso de encontrar, 

   ?caso contrario retorne null 

    */

let personas = [
    {
      id: 0,
      isProgrammer: true,
      age: 28,
      name: "Persona no grata",
      company: "TRANSLINK",
      favoriteFruit: "strawberry"
    },
    {
      id: 1,
      isProgrammer: false,
      age: 38,
      name: "Greta Morton",
      company: "PYRAMI",
      favoriteFruit: "apple"
    },
    {
      id: 2,
      isProgrammer: false,
      age: 32,
      name: "Hester Bowen",
      company: "TURNABOUT",
      favoriteFruit: "apple"
    },
    {
      id: 2,
      isProgrammer: false,
      age: 32,
      name: "PEPE",
      company: "TURNABOUT",
      favoriteFruit: "apple"
    },
    {
      id: 3,
      isProgrammer: false,
      age: 25,
      name: "Melendez Mcfarland",
      company: "XSPORTS",
      favoriteFruit: "strawberry"
    },
    {
      id: 4,
      isProgrammer: false,
      age: 31,
      name: "Kimberly Matthews",
      company: "KNOWLYSIS",
      favoriteFruit: "banana"
    },
    {
      id: 5,
      isProgrammer: false,
      age: 36,
      name: "Hardin Sims",
      company: "SEALOUD",
      favoriteFruit: "banana"
    },
    {
      id: 6,
      isProgrammer: false,
      age: 29,
      name: "Natalia Huff",
      company: "ENERSOL",
      favoriteFruit: "apple"
    }
  ]

  // BUSQUEDA LINEAL
function buscar(arrayPersonas, id){

    for (let i = 0; i < arrayPersonas.length; i++) {
       
        if (id === arrayPersonas[i].id) {
            //RETURN CORTA LA FUNCION
            return arrayPersonas[i];
        }
        
    }

    return null;

}
console.log(buscar(personas,2 )) // UN objeto literal
console.log(buscar(personas,888 )) // NULL
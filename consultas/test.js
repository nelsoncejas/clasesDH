/*2 - Desarrollar una función que reciba 2 numeros y 
     retorne la suma de ambos, si el primer parametro es mayor, 
     caso contrario retornar la resta.*/

     function sumaresta (a,b) {
        if (a > b) {
            return 'la suma es = '+ (a+b)
        } else {
            return 'la resta es = ' + (a-b)
        }
     }
    console.log (sumaresta (100,10))
    console.log (sumaresta (10,10))
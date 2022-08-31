/* 
Deberás crear una función llamada loopDePares que reciba como parámetro un número

 y haga un loop de 0 a 100 mostrando en la consola cada número del loop .

 En caso de que el número de la iteración sumado con el número pasado

 por parámetro sea par , mostrará en la consola : " El número X es par ” .

*/
function loopDePares(nro) {
    for (let i = 1; i < 101; i++) {
        console.log(i)
        let iteracion = i + nro
        if (iteracion % 2 === 0) {
            console.log('el nro ' + iteracion + ' Es par.');
        }
        
    }
}
loopDePares(23)
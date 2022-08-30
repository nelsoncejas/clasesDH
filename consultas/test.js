// // digitalHouse ( )
// Creá la función digitalHouse ( ) que recibirá 2 números como parámetros . La función
// deberá imprimir por pantalla los números del 1 al 100 , pero teniendo en cuenta los
// siguientes criterios :
// • Si el número a imprimir es múltiplo del primer parámetro que se ingresó , deberá
// mostrar el string " Digital " en lugar del número .
// Si el número a imprimir es múltiplo del segundo parámetro ingresado , deberá
// mostrar el string " House " en su lugar del número .
// Si el número a imprimir es múltiplo de ambos parámetros , deberá mostrar el string
// " Digital House " en lugar del número .
function digitalHouse(numero1, numero2) {

    for (let i = numero1; i <= numero2; i++) {
        console.log(i)
        if (i % numero1 === 0) {
            console.log(" Digital ")
        } else if (i % numero2 === 0) {
            console.log(" House ")
        }
    }
}


function digitalHouse(numero1, numero2) {
    for (let i = 0; i <= 100; i++) {
        
        if (i % numero1 === 0) {
            console.log(" Digital ")
        } else if (i % numero2 === 0) {
            console.log(" House ")
        }else if( i % numero1 === 0 && i % numero2 === 0){
            console.log(" Digital House")

        }
    }
}

digitalHouse(7,14)
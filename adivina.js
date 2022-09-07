const prompt = require("prompt-sync")({ sigint: true });
const juega = prompt('Queres jugar ? s/n : ');
if (juega === 's') {
    
    const  nroRandom = Math.floor(Math.random() * 10) +1
    
    let nroElegido = parseInt(prompt('Elige un numero del 1 al 10 : '));

    let jugada = nroElegido === nroRandom;
    while(!jugada){
        nroElegido = parseInt(prompt('Intenta de nuevo 😫 :'));
        jugada = nroElegido === nroRandom;    
    }

    console.log(`Felicidades el numero random es ${nroRandom} 🙋`); 

}else{
    console.log('Gracias, vuelvas prontos'); 
} 


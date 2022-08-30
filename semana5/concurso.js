/* 

Para organizar la información, 
te pedimos crear el ojeto literabl Concurso 
?con una propiedad etapas que indicará el resultado parcial por cada etapa. 
Además, tendrá una propiedad ganador que guardará el ganador (en caso de que exista) como un string. 
Te pedimos además que la función encontrarGanador sea un método del objeto literal Concurso.
*/

const alicia = [10, 80, 75];
const bob =    [90, 20, 25];

let concurso = {
    etapas: function (a, b) {
        let ganadorEtapa = [];
        for (let i = 0; i < a.length; i++) {
            if (a[i] > b[i]) {
                ganadorEtapa.push("Primer participante");
            } else if (a[i] < b[i]) {
                ganadorEtapa.push("Segundo participante");
            } else {
                ganadorEtapa.push("Empate");
            }
        }
        return ganadorEtapa;
    },
    ganador: "",
    encontrarGanador: function(a,b){
        let puntosPrimerParticipante = 0;
        let puntosSegundoParticipante = 0;

        for (let i = 0; i < a.length; i++) {
            if (a[i] > b[i]) {
                puntosPrimerParticipante += 1;
            } else if (a[i] < b[i]) {
                puntosSegundoParticipante += 1;
            }
        }

        //console.log("Puntos del 1er participante: " + puntosPrimerParticipante);
        //console.log("Puntos del 2do participante: " + puntosSegundoParticipante);
        
        if (puntosPrimerParticipante > puntosSegundoParticipante) {
            this.ganador="El ganador es el primer participante"
            return "El ganador es el primer participante"; 
        } else if (puntosPrimerParticipante < puntosSegundoParticipante) {
            this.ganador="El ganador es el segundo participante"
            return "El ganador es el segundo participante";
        } else {
            this.ganador="El ganador es el nadie, hay empate"
            return "El ganador es el nadie, hay empate"
        }
        
    }

}


console.log("ETAPAS: ",concurso.etapas(alicia, bob));
console.log("ENCONTRAR GANADOR: ", concurso.encontrarGanador(alicia, bob));
/*console.log("GANADOR: ",concurso.ganador); */
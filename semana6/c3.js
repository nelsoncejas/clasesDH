let mes = 
[
    [1135, 2500, 900, 1600, 2800, 3650, 1100], // 0
    [333, 2500, 333, 123, 123, 22, 444], // 1
    [44, 2500, 455, 1600, 123, 33, 1100],
    [55, 2500, 222, 22, 11, 3650, 33]
];

console.table(mes);
/* 
Lo que nos solicitan es dar el total de gastos en una semana. Recordemos que
cada fila representa una semana, es decir, si nos indican semana 2 tenemos
que sumar la fila 1 de la matriz. 

Recordar que las matrices comienzan siempre
en posición 0
*/
//ESCRIBE TU CODIGO AQUÍ...

/* console.log(mes[1]);
for (let i = 0; i < mes[0].length; i++) {
    console.log(mes[0][i]);
} */

/* function gastosSemana(mes, semana) {
    let totalSemana = 0;
    
    for (let i = 0; i < mes[semana].length; i++) {
        //const semana1 = mes[semana];
        totalSemana += mes[semana][i]
    }
    return totalSemana;
} */

function totalGastosDia(mes, dia) {
    let totalDias = 0
    for (let i = 0; i < mes.length; i++) {
        totalDias = totalDias + mes[i][dia]
        
    }
    return totalDias;
}

// console.log(totalGastosDia(mes, 2));

// console.log(gastosSemana(mes, 0)); //un valor 13685

/* 
La aplicación también tendrá una parte de estadísticas, para esto nos solicitan
Dar el total de un día en particular, por ejemplo del día 3, acá también
tengamos en cuenta lo que ocurre con las filas, ya que las columnas también
comienzan en 0.
*/
//ESCRIBE TU CODIGO AQUÍ...


function totalGastosDia(mes, dia) {
    let totalDia = 0;
    for (let i = 0; i < mes.length; i++) {
        totalDia = totalDia + mes[i][dia];
    }
    return totalDia;
}
// console.log(totalGastosDia(mes, 2));


/* Por último, es necesario tener el total de gastos realizados en el mes. */

//ESCRIBE TU CODIGO AQUÍ...

/* function gastoMes(mes){
    let totalMes = 0;
    for (let i = 0; i < mes.length; i++) {
        //const semana = mes[i];
        for (let j = 0; j < mes[i].length; j++) {
            totalMes = totalMes + mes[i][j]  
        }
    }

    return totalMes;
}

console.log(gastoMes(mes)); // 29911 */




/* function totalGastosDia(mes, dia) {
    let totalDia = 0;
    // console.log('linea 90');

    for (let i = 0; i < mes.length; i++) {
        // console.log('linea 93');
        totalDia = totalDia + mes[i][dia]
    }
    return totalDia;
}


console.log(totalGastosDia(mes, 2)); */

function gastoMes(mes){
    let totalMes= 0;   
    for (let i = 0; i < mes.length; i++) {
        for (let j = 0; j < mes[i].length; j++) {
           
            totalMes = totalMes + mes[i][j];            
        }
    } 
    return totalMes
}

console.log(gastoMes(mes));




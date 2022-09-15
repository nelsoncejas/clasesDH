let articulos = [
    {
        CODITM: "4CQ7795",
        PRECIO_NUEVO: "12000",
        PRECIO_ANTERIOR: 1500,
        RUBRO: "ACCESORIOS",
        DISCIPLINA: "FUTBOL",
        SECCION: "NIÑOS",
        TIPO: "GUANTE",
        PROVEEDOR: "NIKE",
        CONCODCOL: true,
        CONCODTAL: true,
        CODCOL: "447",
        CODTAL: "30",
        row_excel: "row1",
        ACUM: 27000,
        CONT: 18
    },
    {
        CODITM: "4913011",
        PRECIO_NUEVO: "3000",
        PRECIO_ANTERIOR: 2500,
        RUBRO: "ACCESORIOS",
        DISCIPLINA: "MODA",
        SECCION: "HOMBRES",
        TIPO: "GORRAS",
        PROVEEDOR: "NIKE",
        CONCODCOL: false,
        CONCODTAL: true,
        CODCOL: "011",
        CODTAL: "*0",
        row_excel: "row3",
        ACUM: 13832,
        CONT: 4
    },
    {
        CODITM: "4CQ7795",
        PRECIO_NUEVO: "10000",
        PRECIO_ANTERIOR: 1500,
        RUBRO: "ACCESORIOS",
        DISCIPLINA: "FUTBOL",
        SECCION: "NIÑOS",
        TIPO: "GUANTE",
        PROVEEDOR: "NIKE",
        CONCODCOL: true,
        CONCODTAL: true,
        CODCOL: "447",
        CODTAL: "30",
        row_excel: "row4",
        ACUM: 9000,
        CONT: 6
    }
]
console.table(articulos);
let arrayAux = []
let arrayObservaciones = []

articulos.forEach(elem => {
    let itemRepetido = arrayAux.find(e => e.CODITM === elem.CODITM);
    if (itemRepetido) {
        let mensaje = ''
        if (!itemRepetido.CONCODCOL || !elem.CONCODCOL) {
            mensaje = `El coditm ${elem.CODITM} tiene un conflicto: hay una generalizacion de color`
            elem.conflico = true
            itemRepetido.conflico = true
        }else if (itemRepetido.CODCOL === elem.CODCOL) {

            // mensaje = `El coditm ${elem.CODITM} tiene un conflicto: color repetido `
            
            if (!itemRepetido.CONCODTAL || !elem.CONCODTAL) {
                mensaje = `El coditm ${elem.CODITM} tiene un conflicto: hay una generalizacion de talle `
                elem.conflico = true
                itemRepetido.conflico = true

            }else if (itemRepetido.CODTAL === elem.CODTAL) {
                elem.conflico = true
                itemRepetido.conflico = true
                mensaje = `El coditm ${elem.CODITM} tiene un conflicto: hay una igualdad de sku`
            }
            
        }
        // elem.repiteCoditm = true

        arrayObservaciones.push(
            {
                mensaje,
            }
        )

    }
    arrayAux.push(elem);

});

console.table(arrayAux);
console.table(arrayObservaciones);
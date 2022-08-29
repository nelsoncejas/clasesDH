

/* // 3 . Al objeto " banco " , crearle un método 11
nombre ( titular ) por parámetro , deberá busca
objeto cliente que corresponda con ese nombr
banco.consultarCliente ( " Ramon Connell " ) ;*/

const banco = { 

    clientes: arrayCuentas,

    consultarCliente: function (nombretitular) {
        for (let i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i].titularCuenta === nombretitular) {
                console.log(' cliente encontrado ')
                return this.clientes[i]
            }
        }
    }
}; 

banco.consultarCliente ("Ramon Connell")



Buenas para coordinar una clase  si lo necesitan, queria consultar en que opción queda mejor para uds ? 
1 - 19 hs Arg, Martes 30
2 - 22 hs Arg, Martes 30

Quedo atento a sus consultas, por favor recordar etiquetarme @martin
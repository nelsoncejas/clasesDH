

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

const arrayCuentas =
[
    {
      titular: "Arlene Barr",
      estaHabilitada: false,
      saldo: 3253.40,
      edadTitular: 33,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Roslyn Torres",
      estaHabilitada: false,
      saldo: 3229.45,
      edadTitular: 27,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Cleo Lopez",
      estaHabilitada: true,
      saldo: 1360.19,
      edadTitular: 34,
      tipoCuenta: "corriente"
    },
    {
      titular: "Daniel Malone",
      estaHabilitada: false,
      saldo: 3627.12,
      edadTitular: 30,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Ethel Leon",
      estaHabilitada: true,
      saldo: 1616.52,
      edadTitular: 34,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Harding Mitchell",
      estaHabilitada: true,
      saldo: 1408.68,
      edadTitular: 25,
      tipoCuenta: "corriente"
    }
  ]
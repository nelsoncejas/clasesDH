let paises = [
    {
        nombre: "Argentina",
        continente: "Sudamérica",
        poblacion: 40000000
    },
    {
        nombre: "Colombia",
        continente: "Sudamérica",
        poblacion: 50372000
    },
    {
        nombre: "Francia",
        continente: "Europa",
        poblacion: 67000000
    },
    {
        nombre: "Etiopía",
        continente: "África",
        poblacion: 15000000
    },
    {
        nombre: "Chile",
        continente: "Sudamérica",
        poblacion: 10000000
    }
];

console.log(1 & true);
function retornarPaises(paises, continente, poblacion) {

    let nuevoArray = [];
    for (let i = 0; i < paises.length; i++) {
        if (paises[i].continente == continente & paises[i].poblacion >= poblacion) {
            nuevoArray.push(paises[i]);
        }
    }
    return nuevoArray;
}
  console.log(retornarPaises(paises,'Europa',500));
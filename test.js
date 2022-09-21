
/* function comenzar(param) {
    
    if (param) {
        setInterval(() => {
            console.log(param);
        }, 1000);
    }
}

let saludo = 'Hola Camada'
comenzar(saludo) */

//Buffer() requires a number, array or string as the first parameter, and an optional encoding type as the second parameter.
// The default is "utf8". Possible encoding types are "ascii", "utf8", "ucs2", "base64", "binary", and "hex"
let b = Buffer.from('Martin');
// If we don't use toString(), JavaScript assumes we want to convert the object to utf8.
// We can make it convert to other formats by passing the encoding type to toString().
let s = b.toString('base64');

/* let b = new Buffer('SmF2YVNjcmlwdA==', 'base64')
let s = b.toString(); */

console.log(String(123));
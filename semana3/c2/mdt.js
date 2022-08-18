
const fibbo = (num) => {
    let a = 0;
    let b = 1;
    let c;
    console.log(a);
    console.log(b);
    
    for (let i = 0; i < num - 2; i++) {
        c = a + b;
        a = b;
        b = c;
        console.log(c);
    }
}
fibbo(10)

/* con do while */

/* let fibonacci=nro=>{
    let actual=1
    let anterior=0
    let suma=0
    do{
        console.log(actual)
        suma=anterior+actual
        anterior=actual
        actual=suma
    }while(actual<=nro)
}
fibonacci(1000) */
const login = (user, pass) => {
     /*   if (user === 'ADMIN' && pass === '123456') {
           console.log('Permitido');
       }else{
           console.log('Denegado');
       }     */

    let result = user === 'ADMIN' && pass === '123456' ? 'permitido' : 'Denegado';
    console.log(result);
}

console.log('login(ADMIN,123456)');
login('ADMIN', '123456')

console.log('login(Admin,123456)');
login('Admin', '123456')


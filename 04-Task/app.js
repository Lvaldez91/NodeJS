// https://www.npmjs.com/package/inquirer
// https://www.npmjs.com/package/colors

require('colors');
//const { mostrarMenu, pausa } =  require('./helpers/mensajes');
const { inquirerMenu, pausa } = require('./helpers/inquirer');

console.clear();

const main = async() => {
    console.log('Hello World');
    let opt = '';
    // ejecuta al menos una ves mientras se cumpla la condición
    do {
        opt = await inquirerMenu();
        console.log({opt});
        await pausa(); 
    } while (opt !== '0');
};

main();
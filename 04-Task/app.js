// https://www.npmjs.com/package/inquirer
// https://www.npmjs.com/package/colors

require('colors');
//const { mostrarMenu, pausa } =  require('./helpers/mensajes');
const { inquirerMenu, pausa } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');


console.clear();

const main = async() => {
    console.log('Hello World');
    let opt = '';
    // ejecuta al menos una ves mientras se cumpla la condición
    do {
        opt = await inquirerMenu();
        console.log({opt});
        // const Tasks = new Tareas();
        // const Task = new Tarea('comprar comida');

        console.log(tarea);
        await pausa();
    } while (opt !== '0');
};

main();
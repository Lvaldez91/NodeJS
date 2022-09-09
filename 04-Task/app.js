// https://www.npmjs.com/package/inquirer
// https://www.npmjs.com/package/colors

require('colors');
//const { mostrarMenu, pausa } =  require('./helpers/mensajes');
const { inquirerMenu, pausa,leerInput } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');


console.clear();

const main = async() => {
    //console.log('Hello World');
    let opt = '';
    // ejecuta al menos una ves mientras se cumpla la condición
    do {
        opt = await inquirerMenu();
        console.log(opt('opcion'));
        // const Tasks = new Tareas();
        // const Task = new Tarea('comprar comida');
        switch(opt('opcion')){
            case '1':
                const descripcion = await leerInput('Descripción: ');
                console.log(descripcion);
                break;
            case '2':
                console.log('No defined');
                break;
            }
        //console.log(tarea);
        await pausa();
    } while (opt !== '0');
};

main();
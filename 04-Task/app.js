// https://www.npmjs.com/package/inquirer
// https://www.npmjs.com/package/colors

require('colors');
const { guardaDB, leerArchivo } = require('./helpers/guardarArchivo');
//const { mostrarMenu, pausa } =  require('./helpers/mensajes');
const { inquirerMenu, pausa,leerInput } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');


console.clear();

const main = async() => {
    //console.log('Hello World');
    let opt = '';
    const tareas = new Tareas();
    const tarasDB = leerArchivo();

    if(tarasDB){
        console.log('luz' + tareas.cargarTareasFromArray());
        await pausa();
    }
        // ejecuta al menos una ves mientras se cumpla la condición
    do {
        opt = await inquirerMenu();
        console.log(opt['opcion']);
        // const Tasks = new Tareas();
        // const Task = new Tarea('comprar comida');
        switch(opt['opcion']){
            case '1':
                const descripcion = await leerInput('Descripción: ');
                tareas.crearTareas(descripcion);
                //console.log(descripcion);
                break;
            case '2':
                console.log(tareas.listArr);
                break;
            }
        //console.log(tarea);
        guardaDB(tareas.listArr);
        await pausa();
    } while (opt !== '0');
};

main();
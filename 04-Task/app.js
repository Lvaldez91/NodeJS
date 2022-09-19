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
    const tareasDB = leerArchivo();

    if(tareasDB){
        console.log(tareas.cargarTareasFromArray(tareasDB));
    }

    // ejecuta al menos una ves mientras se cumpla la condición
    do {
        opt = await inquirerMenu();
        switch(opt['opcion']){
            case '1':
                const descripcion = await leerInput('Descripción: ');
                tareas.crearTareas(descripcion);
                guardaDB(tareas.listArr);
                break;
            case '2':
                tareas.listarTareas();
                break;
            }
        await pausa();
    } while (opt !== '0');
};

main();
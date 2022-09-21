// https://www.npmjs.com/package/inquirer
// https://www.npmjs.com/package/colors

require('colors');
const { guardaDB, leerArchivo } = require('./helpers/guardarArchivo');
//const { mostrarMenu, pausa } =  require('./helpers/mensajes');
const { inquirerMenu, pausa,leerInput, listadoTareasBorrar, confirma,
    mostrarListadoCheckList} = require('./helpers/inquirer');
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
                tareas.listarTareas('all');
                break;
            case '3':
                tareas.listarTareas('Completada');
                break;
            case '4':
                tareas.listarTareas('Pendiente');
                break;
            case '5':
                const ids = await mostrarListadoCheckList(tareas.listArr);
                tareas.toggleCompletadas(ids);
                break;
            case '6':
                const id = await listadoTareasBorrar(tareas.listArr);

                if ( id !== '0' ) {
                    const ok = await confirma('¿Esta seguro?');
                    if(ok){
                        tareas.borrarTarea(id);
                        console.log('Tarea borrada');
                    }
                }
                //console.log({ok});
                break;
            }
        await pausa();
    } while (opt['opcion'] !== '0');
};

main();
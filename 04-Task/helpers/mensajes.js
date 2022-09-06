const { readlink } = require('fs');

require('colors');

const mostrarMenu = () => {

    return new Promise(resolve => {
        console.clear();
        console.log('=========================='.green);
        console.log('  Seleccione una opción '.blue);
        console.log('==========================\n'.green);

        console.log(`${'1.'.bold.cyan} Crear tarea`);
        console.log(`${'2.'.bold.cyan} Listar tareas`);
        console.log(`${'3.'.bold.cyan} Listar tareas completadas`);
        console.log(`${'4.'.bold.cyan} Listar tareas pendientes`);
        console.log(`${'5.'.bold.cyan} Completar tarea(s)`);
        console.log(`${'6.'.bold.cyan} Borrar Tarea`);
        console.log(`${'0.'.bold.cyan} Salir`);

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        // se dispara por un callBack que ejecuta despues de que termine
        readline.question('\nSeleccione una opción: '.yellow, (opt) =>{
            readline.close();
            resolve(opt);
        });
    });
};

const pausa = () => {
    return new Promise(resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question(`\nPresione ${'ENTER'.green} para continuar...\n`, (opt) => {
            readline.close();
            resolve();
        });
    });
};

module.exports = {
    mostrarMenu,
    pausa
};
require('colors');
const inquirer = require('inquirer');
//import inquirer from 'inquirer';

const menuOpts = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: '1. Crear tarea'
            },
            {
                value: '2',
                name: '2. Listar tareas'
            },
            {
                value: '3',
                name: '3. Listar tareas completadas'
            },
            {
                value: '4',
                name: '4. Listar tareas pendientes'
            },
            {
                value: '5',
                name: '5. Completar tarea(s)'
            },
            {
                value: '6',
                name: '6. Borrar Tarea'
            },
            {
                value: '0',
                name: '0. Salir'
            }
        ]
    }
];

const inquirerMenu = async() => {
    console.clear();
    console.log('=========================='.green);
    console.log('  Seleccione una opción '.blue);
    console.log('==========================\n'.green);

    const opt = await inquirer.prompt(menuOpts);
    return opt;
};

const pausa = async() => {
    const question = [{
        type :  'input',
        name : 'enter',
        message: `\nPresione ${'ENTER'.green} para continuar...\n`
    }];
    console.log('\n');
    await inquirer.prompt(question);
};

const leerInput = async(message) => {
    const question = [{
        type : 'input',
        name : 'desc',
        message,
        validate(value) {
            if(value.length === 0){
                return 'Por favor ingrese un valor';
            }
            return true;
        }
    }];

    const {desc} = await inquirer.prompt(question);
    return desc;
};

module.exports = {
    inquirerMenu,
    pausa,
    leerInput
};
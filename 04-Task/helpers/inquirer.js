require('colors');
const inquirer = require('inquirer');
//import inquirer from 'inquirer';

const menuOpts = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: ['opt1', 'opt2', 'opt3', 'opt4', 'opt5', 'opt6']
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

module.exports = {
    inquirerMenu
};
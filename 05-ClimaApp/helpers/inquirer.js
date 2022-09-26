const inquirer = require('inquirer');

const menuOpc = [
    {
        type:'list',
        name: 'opc',
        message: 'What do you need to do?',
        choices:[
            {
                value: 1,
                name: `${'1'.cyan}. Search city`
            },
            {
                value: 2,
                name: `${'2'.cyan}. History`
            },
            {
                value: 0,
                name: `${'0'.cyan}. Log Out`
            }
        ]
    }
];

const inqMenuOpc = async() => {
    console.clear();
    console.log('=========================='.green);
    console.log('  Seleccione una opción '.blue);
    console.log('==========================\n'.green);

    const options = await inquirer.prompt(menuOpc);
    return options;
};

const pausa = async() => {
    const question = [{
        type :  'input',
        name : 'enter',
        message: `\nPress ${'ENTER'.green} to continue...\n`
    }];
    console.log('\n');
    await inquirer.prompt(question);
};

const readInput = async(message) => {
    const question = [{
        type : 'input',
        name : 'desc',
        message,
        validate(value) {
            if(value.length === 0){
                return 'Please input value';
            }
             return true;
        }
    }];
    const {desc} = await inquirer.prompt(question);
    return desc;
};

module.exports = {
    inqMenuOpc,
    readInput,
    pausa
};
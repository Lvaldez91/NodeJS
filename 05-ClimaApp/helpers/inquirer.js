const inquirer = require('inquirer');

const menuOpc = [
    {
        type:'list',
        name: 'opc',
        message: 'What do you need to do?',
        choices:[
            {
                value: '1',
                name: `${'1'.cyan}. Search city`
            },
            {
                value: '2',
                name: `${'2'.cyan}. History`
            }
        ]
    }
];


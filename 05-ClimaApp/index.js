require('colors');
const {inqMenuOpc,pausa} = require('./helpers/inquirer');

const main = async() => {
    console.clear();
    let opts = '';

    do {
        opts = await inqMenuOpc();

        switch(opts['opc']){
            case 1:

            break;
            case 2:

            break;
        }
        if(opts['opc']  !== 0) await pausa();
    } while (opts['opc'] !== 0);

};

main();
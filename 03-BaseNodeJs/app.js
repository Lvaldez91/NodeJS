const {createFile3} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');
console.clear();

console.log(process.argv);

createFile3(argv.b, argv.l, argv.h)
    .then(nameFile => console.log(colors.brightCyan(nameFile),colors.rainbow('creado')))
    .catch(err => console.log(err));

    //console.log(colors.brightCyan('Blindingly ') + colors.brightRed('bright? ') + colors.brightYellow('Why ') + colors.brightGreen('not?!'));

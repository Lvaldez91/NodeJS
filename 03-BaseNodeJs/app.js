
const {createFile3} = require('./helpers/multiplicar');

//const argv = require('yargs').argv;

const argv = require('yargs')
.option('b', {
    alias:'base',
    type: 'number',
    demandOption: true
})
.option('l', {
    alias:'listar',
    type: 'boolean',
    demandOption: true,
    default: false
})
.check((argv, options) => {
    if(isNaN(argv.b)){
        throw 'La base tiene que ser un número'
    }
    return true;
})
.argv;

console.clear();

console.log(process.argv);

createFile3(argv.b, argv.l)
    .then(nameFile => console.log(nameFile,'creado'))
    .catch(err => console.log(err));
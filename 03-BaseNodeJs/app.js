
const {createFile3} = require('./helpers/multiplicar');

//const argv = require('yargs').argv;

const argv = require('yargs')
.option('b', {
    alias:('base:5','limite:false'),
    type: ('number','bolean'),
    demandOption: (true, true)
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
// const [, , arg3] = process.argv;
// const [,base=0] = arg3.split('=');
createFile3s(argv.b)
    .then(nameFile => console.log(nameFile,'creado'))
    .catch(err => console.log(err));
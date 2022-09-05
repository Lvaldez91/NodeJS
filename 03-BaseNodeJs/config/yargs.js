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

// se envia argv por    ue es un objeto en si
module.exports = argv;
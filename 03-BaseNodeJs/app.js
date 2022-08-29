
const {createFile3} = require('./helpers/multiplicar');
console.clear();
console.log(process.argv);
const [, , arg3] = process.argv;
const [,base=0] = arg3.split('=');
 console.log(base);
//const base = 7;

createFile3(base)
    .then(nameFile => console.log(nameFile,'creado'))
    .catch(err => console.log(err));
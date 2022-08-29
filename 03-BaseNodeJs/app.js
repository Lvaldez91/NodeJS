
const {createFile} = require('./helpers/multiplicar');
console.clear();
const base = 7;

createFile(base)
.then(nameFile => console.log(nameFile,'creado'))
.catch(err => console.log(err));
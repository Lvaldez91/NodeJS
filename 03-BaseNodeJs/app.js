
const {createFile3} = require('./helpers/multiplicar');
console.clear();
const base = 7;

createFile3(base)
    .then(nameFile => console.log(nameFile,'creado'))
    .catch(err => console.log(err));
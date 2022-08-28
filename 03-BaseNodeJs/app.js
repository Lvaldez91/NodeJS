const fs = require('fs');

console.clear();
console.log('=======================')
console.log('    Tabla del Cinco    ');
console.log('=======================')

const base = 5;
let salida = '';

for (let i = 0; i<=10; i++){
    //console.log(`${base} x ${i} = ${ base * i}`);
    salida += `${base} x ${i} = ${ base * i} \n`;
}
fs.writeFile('tabla-5.txt',salida, (err) => {
    if(err) throw err;
    console.log('Archivo creado');
});
console.log(salida);

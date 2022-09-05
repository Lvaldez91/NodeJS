const fs = require('fs');
const colors = require('colors');

// forma 3
const createFile3 = async(base = 5,limite=false, hasta = 10) => {
    try{
        console.clear();
        console.log(colors.brightRed('======================='));
        console.log(colors.rainbow(`    Tabla del ${base}   `));
        console.log(colors.brightRed('======================='));

        let salida = '';
        for (let i = 0; i <= hasta; i++){
            //console.log(`${base} x ${i} = ${ base * i}`);
            salida += `${colors.brightCyan(base)} ${colors.america('x')} ${colors.yellow(i)} = ${ colors.bold.blue(base * i)} \n`;
        }
        console.log(`Archivo generado correctamente!!`);
        console.log(salida);
        fs.writeFileSync(`tabla-${base}.txt`,salida);
        return `Tabla ${base}.txt`;
    } catch(err){
        console.log(err);
    }
}

module.exports = {
    createFile3
};

// fs.writeFile(`tabla-${base}.txt`,salida, (err) => {
//     if(err) throw err;
//     console.log('Archivo creado');
// });
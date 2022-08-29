const fs = require('fs');

const createFile = (base = 5) => {
    console.clear();
    console.log('=======================');
    console.log(`    Tabla del ${base}   `);
    console.log('=======================');

    let salida = '';
    for (let i = 0; i<=10; i++){
        //console.log(`${base} x ${i} = ${ base * i}`);
        salida += `${base} x ${i} = ${ base * i} \n`;
    }
    console.log(`Archivo generado correctamente!!`);
    fs.writeFileSync(`tabla-${base}.txt`,salida);
    console.log(salida);
}

const createFile = (base = 5) => {
    return new Promise((resolve, reject) =>{
        (base)
        ? resolve(
            console.clear();
            console.log('=======================');
            console.log(`    Tabla del ${base}   `);
            console.log('=======================');

            let salida = '';
            for (let i = 0; i<=10; i++){
                //console.log(`${base} x ${i} = ${ base * i}`);
                salida += `${base} x ${i} = ${ base * i} \n`;
            }
            console.log(`Archivo generado correctamente!!`);
            fs.writeFileSync(`tabla-${base}.txt`,salida);
            console.log(salida);
        )
        : reject(`Existe un error`);
    })
}

module.exports = {
     createFile
};

// fs.writeFile(`tabla-${base}.txt`,salida, (err) => {
//     if(err) throw err;
//     console.log('Archivo creado');
// });
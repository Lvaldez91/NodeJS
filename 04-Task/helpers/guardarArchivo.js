const fs = require('fs');

const guardaDB = (data) => {
    const archivo = './db/data.txt';
    fs.writeFileSync(archivo, data);
};
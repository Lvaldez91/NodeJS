require('colors');
require('dotenv').config();
const {inqMenuOpc,pausa, readInput} = require('./helpers/inquirer');
const Searchs = require('./models/searchs');

const main = async() => {
    console.clear();

    let opts = '';
    const search = new Searchs();

    do {
        opts = await inqMenuOpc();

        switch(opts['opc']){
            case 1:
                // See message
                const cityInput = await readInput('City:');
                await search.citys(cityInput);
                console.log(cityInput);
                // Search citys

                // I can selected city

                // weather

                // I can see results
                console.log('\nInformation of the city'.green);
                console.log('City: ',);
                console.log('Latitude: ',);
                console.log('Length: ',);
                console.log('Temperature: ',);
                console.log('Minimum: ',);
                console.log('Maximum: ',);
            break;
            case 2:
            break;
        }
        if(opts['opc']  !== 0) await pausa();
    } while (opts['opc'] !== 0);

};

//main();
console.log(process.env);
// https://www.npmjs.com/package/request
// https://www.npmjs.com/package/fetch
// https://www.npmjs.com/package/axios
// https://ww17.regres.in/

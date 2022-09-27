const axios = require('axios');
class Searchs {

    // historys = ['','','','',''];

    constructor(){
        // TODO: read DataBase if exists

    }

    async citys(city = '') {
        // request http
        const resp = await axios.get('https://reqres.in/api/users?page=2');
        console.log(resp);

        // return citys
        return [];
    }
}


module.exports = Searchs;
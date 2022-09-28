const axios = require('axios');
class Searchs {

    // historys = ['','','','',''];

    constructor(){
        // TODO: read DataBase if exists

    }

    async citys(city = '') {
        try{
            // request http
            const resp = await axios.get('https://reqres.in/api/users?page=2');
            console.log(resp.data);

            // return citys
        } catch(error){

        }
        
        return [];
    }
}


module.exports = Searchs;
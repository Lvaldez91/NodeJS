const axios = require('axios');
class Searchs {

    // historys = ['','','','',''];

    constructor(){
        // TODO: read DataBase if exists
    }

    get paramsMapBox(){
        return{
            //'access_token': '',
            'limit': '5',
            'language':'es'
        };
    }

    async citys(city = '') {
        try{
            // request http
            //const resp = await axios.get('https://reqres.in/api/users?page=2');
            //console.log(resp.data);
            // return citys
            const instance = axios.create({
                baseURL:  `https://reqres.in/api/users?page=2`,
                params: this.paramsMapBox
            });

            const resp = await instance.get();
            console.log(resp.data);
            return [];
        } catch(error){
            console.log('Error: ' + error);
        }
        return [];
    }
}


module.exports = Searchs;
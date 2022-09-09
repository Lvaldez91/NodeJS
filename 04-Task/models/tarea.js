const {v4: uuid} = require('uuid');

class Tarea {
    id = '';
    desc = '';
    competadoEn = null;

    constructor() {
        this.id = uuid;
        this.desc = desc;
    }
}

module.exports = Tarea;
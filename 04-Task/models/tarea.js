const {v4: uuid} = require('uuid');

class Tarea {

    constructor(uuid, desc, estatus) {
        this.id = uuid;
        this.desc = desc;
    }
}

module.exports = Tarea;
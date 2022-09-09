const Tarea = require("./tarea");

class Tareas {

    constructor(_listado){
        this._listado = _listado;
    }

    crearTareas(desc = ''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }
}

module.exports = Tareas;
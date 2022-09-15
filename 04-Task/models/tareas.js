const Tarea = require("./tarea");

class Tareas {

    get listArr(){
        const listado = [];
        Object.keys(this._listado).forEach(key => {
            console.log(key);
            const tarea = this._listado[key];
            listado.push(tarea);
        });
        return listado;
    }

    constructor(_listado = {}){
        this._listado = {};
    }

    crearTareas(desc = ''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }
}

module.exports = Tareas;
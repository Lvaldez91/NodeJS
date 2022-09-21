const Tarea = require("./tarea");

class Tareas {

    get listArr(){
        const listado = [];
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        });
        return listado;
    }

    constructor(){
        this._listado = {};
    }

    borrarTarea( id = '' ) {

        if ( this._listado[id] ) {
            delete this._listado[id];
        }

    }

    cargarTareasFromArray(tareas = []) {
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        });
    }

    crearTareas(desc = ''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    listarTareas(estatus) {
        console.log();
        this.listArr.forEach((tarea, i) => {

            const idx = `${i + 1}`.green;
            const { desc, completadoEn } = tarea;
            const estado = ( completadoEn )? 'Completada'.green: 'Pendiente'.red;

            if(estatus == 'all'){
                console.log(`${ idx } ${ desc } :: ${ estado }`);
            } else if (estatus == 'Completada' && (completadoEn == 'Completada' || completadoEn != null)){
                console.log(`${ idx } ${ desc } :: ${ estado }`);
            } else if (estatus == 'Pendiente' && (completadoEn == 'Pendiente' || completadoEn == null)){
                console.log(`${ idx } ${ desc } :: ${ estado }`);
            }
        });
    }

    toggleCompletadas(ids=[]){
        ids.forEach( id => {
            const tarea = this._listado[id];
            if ( !tarea.completadoEn || tarea.completadoEn == null ) {
                tarea.completadoEn = new Date().toISOString();
            }
        });

        this.listArr.forEach(tarea => {
            if ( !ids.includes(tarea.id) ) {
                this._listado[tarea.id].completadoEn = null;
            }
        });
    }
}

module.exports = Tareas;
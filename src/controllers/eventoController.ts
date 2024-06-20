import { Evento, EVENTOS } from "../models/evento";
import { EventoGrupal } from "../models/eventoGrupal";
import { Equipo, EQUIPOS } from "../models/equipo";
import { JUECES, Juez } from "../models/juez";
import { Resultado } from "../models/resultado";
import { ResultadoAtletismo } from "../models/resultadoAtletismo";
import { Puntaje } from "../models/puntaje";

class EventoController {

    static posiblesResultados: Map<string, Resultado> = new Map([["CrearAtleta", new ResultadoAtletismo()]]);


    // constructor(id: number, fecha: Date, jueces: Array<Juez>, participantes: Array<Equipo>){
    static crearEventoGrupal(idJueces: string[], idEquipos: number[]) {


        try {
            let equiposAPasar = [];
            for (let i = 0; i < EQUIPOS.length; i++) {
                let id = EQUIPOS[i].id;
                if (idEquipos.includes(id)) {
                    equiposAPasar.push(EQUIPOS[i]);
                }
            }

            let juecesAPasar = [];
            for (let i = 0; i < JUECES.length; i++) {
                let idJuez = JUECES[i].id;
                if (idJueces.includes(idJuez)) {
                    juecesAPasar.push(JUECES[i]);
                }
            }
            if (juecesAPasar.length == 0 || equiposAPasar.length == 0) {
                return null;
            }
            let newEvento = new EventoGrupal(EVENTOS.length + 1, new Date(), juecesAPasar, equiposAPasar);
            EVENTOS.push(newEvento);
            return newEvento;
        } catch (error) {
            return null;
        }


    } 




    static getEventos(): Evento[] {
        let result: Array<Evento> = EVENTOS.map(evento => ({
            ...evento,
        }));
        return result;
    }



    /**
    * 
    * @param id 
    * @returns instancia de evento especificada; null si no existe.
    */
    static getEventoById(id: number): Evento | undefined {
        const evento = EVENTOS.find(evento => evento.getId() === id);
        return evento;
    }





    static agregarJuezAEvento(juez: Juez, idEvento: number) {
        try {
            const evento = EVENTOS.find(evento => evento.getId() === idEvento);
            if (evento == undefined) {
                throw new Error("No existe dicho evento");
            }

            // Buscamos si el juez ya existe
            const j = evento.getJueces().find((j: Juez) => j.id == juez.id)
            if (j != undefined) {
                throw new Error("El juez ya esta asignado al evento")
            }

            let antes = evento.getJueces().length;
            evento.agregarJuez(juez);
            let ahora = evento.getJueces().length
            if (antes >= ahora) {
                throw new Error("No se pudo agregar el juez")
            }
            return true;
        } catch (error) {
            console.log(error)
            return false;
        }

    }


    static quitarJuezAEvento(juez: Juez, idEvento: number) {
        try {
            const evento = EVENTOS.find(evento => evento.getId() === idEvento);
            if (evento ==  undefined) {
                throw new Error("No existe dicho evento");
            }

            if (!evento.quitarJuez(juez)) {
                throw new Error("No se pudo quitar el juez, no existe")
            }
            return true;
        } catch (error) {
            console.log(error)
            return false;
        }

    }


    static agregarParticipante(participante: Equipo , idEvento: number) {
        try {
            const evento = EVENTOS.find(evento => evento.getId() === idEvento);
            if (evento ==  undefined) {
                throw new Error("No existe dicho evento");
            }
            if (!evento.agregarParticipante(participante)) {
                throw new Error("No se pudo agregar al equipo")
            }
            return true;
        } catch (error) {
            console.log(error)
            return false;

        }
    }

    static quitarParticipante(equipo: Equipo , idEvento: number) {
        try {
            const evento = EVENTOS.find(evento => evento.getId() === idEvento);
            if (evento ==  undefined) {
                throw new Error("No existe dicho evento");
            }

            if (!evento.quitarParticipante(equipo.id)) {
                throw new Error("No se pudo quitar el equipo, no existe")
            }
            return true;
        } catch (error) {
            console.log(error)
            return false;

        }
    }

    static calificarAtleta(idEvento: number, idAtleta: string, puntajes: Array<Puntaje>, categoriaEvento: string){
        
        try {
            let newResultado = this.posiblesResultados.get(categoriaEvento.toLowerCase());
            if (newResultado == null ) {
                return null;
            }

            const evento = EVENTOS.find(evento => evento.getId() === idEvento);
            if (evento ==  undefined) {
                throw new Error("No existe dicho evento");
            }

            // Caliifcamos al atleta
            evento.setResultado(puntajes, newResultado, idAtleta);
            return evento.getResultadoAtleta(idAtleta);
            
        } catch (error) {
            console.log(error)
            return false;
            
        }
    }


    static calificarEquipo(idEvento: number, idEquipo: string, puntajes: Array<Puntaje>, categoriaEvento: string){
        try {
            let newResultado = this.posiblesResultados.get(categoriaEvento.toLowerCase());
            if (newResultado == null ) {
                return null;
            }

            const evento = EVENTOS.find(evento => evento.getId() === idEvento);
            if (evento ==  undefined) {
                throw new Error("No existe dicho evento");
            }

            // Caliifcamos al equipo
            evento.setResultado(puntajes, newResultado, idEquipo);
            return evento.getResultadoEquipo(idEquipo);
            
        } catch (error) {
            console.log(error)
            return false;
            
        }
    }

}

export = EventoController;

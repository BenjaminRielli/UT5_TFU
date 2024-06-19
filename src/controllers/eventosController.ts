import { Evento, EVENTOS } from "../models/evento";
import { Juez } from "../models/juez";

class EventoController {

    eventos: Evento[] = EVENTOS;

    static get(): Evento[] {
        return EVENTOS;
    }

    static getById(id: number): Evento | undefined {
        const e = EVENTOS.find(e => e.id == id);
        if (e == null) {
            console.log(`Error: no se pudo encontrar el evento con id= '${id}'`);
        }
        return e;
    }

    static add(fecha: Date, id: number): Evento | null {
        const evento: Evento | undefined = EventoController.getById(id);
        if (evento == null) {
            const eventoNuevo: Evento = {
                fecha: fecha,
                id: id,
                jueces: []
            }
            EVENTOS.push(eventoNuevo);
            return eventoNuevo;
        }
        return null;
    }

    static eliminarEvento(id: number): boolean {
        const index = EVENTOS.findIndex(e => e.id === id);
        if (index !== -1) {
            EVENTOS.splice(index, 1);
            return true;
        }
        return false;
    }

    static registrarJuez(idEvento: number, juez: Juez): Juez | null {
        const evento: Evento | undefined = EventoController.getById(idEvento);
        if (evento != null) {
            evento.jueces.push(juez);
            return juez;
        }
        return null;
    }

    static eliminarJuez(idEvento: number, idJuez: number): boolean {
        const evento: Evento | undefined = EventoController.getById(idEvento);
        if (evento != null) {
            const index = evento.jueces.findIndex(j => j.id.toString() === idJuez.toString());
            if (index !== -1) {
                evento.jueces.splice(index, 1);
                return true;
            }
        }
        return false;
    }
}

export = EventoController;
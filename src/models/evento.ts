import { Atleta } from "./atleta";
import { Equipo } from "./equipo";
import { Juez } from "./juez";
import { Participante } from "./participante";
import { Puntaje } from "./puntaje";
import { Resultado } from "./resultado";

export class Evento {
    id: number;
    fecha: Date;
    jueces: Juez[];
    idCategoria: number;
    participantes: Participante[] = [];
    resultado: Map<number | string, Resultado> = new Map();

    constructor(id: number, fecha: Date, idCategoria: number) {
        this.id = id;
        this.fecha = fecha;
        this.jueces = [];
        this.idCategoria = idCategoria;
    }

    public agregarJuez(juez: Juez) {
        try {
            for (let i = 0; i < this.jueces.length; i++) {
                if (juez.id == this.jueces[i].id) {
                    return 1;
                }
            }

            // Legamos acá, no existe
            this.jueces.push(juez);
            return 0;
        } catch (error) {
            console.log(error)
            return -1;
        }

    }


    quitarJuez(juez: Juez) {
        try {
            let antes = this.jueces.length
            this.jueces = this.jueces.filter((juezExistente) => juezExistente.id != juez.id);
            let ahora = this.jueces.length

            return antes > ahora;
        } catch (error) {
            console.log(error)
            return false;
        }

    }
    agregarParticipante(participante: Participante) {

        try {
            let p = this.participantes.find((p) => p.id == participante.id);
            if (p != null) {
                throw new Error("Ya existe el participante");
            }
            this.participantes.push(participante)
        } catch (error) {
            return false;
        }
    }

    public quitarParticipante(participante: Participante) {
        try {
            let antes = this.participantes.length
            this.participantes = this.participantes.filter((p) => p.id != participante.id);
            let ahora = this.participantes.length

            return antes > ahora;
        } catch (error) {
            return false;
        }
    }

    public setResultado(idJuez: string, datos: Array<object>, resultado: Resultado, idParticipante: number | string) {
        try {
            resultado.registrarPuntaje(idJuez, datos);
            this.resultado.set(idParticipante, resultado);
            return true;
        } catch (error) {
            return false;
        }
    }

    public getResultado(idParticipante: number | string) {
        try {
            let resultado = this.resultado.get(idParticipante);
            return resultado?.devolverPuntajeFinal();
        } catch (error) {
            console.log(error)
            return undefined;
        }
    }

}

export const EVENTOS: Evento[] = [];

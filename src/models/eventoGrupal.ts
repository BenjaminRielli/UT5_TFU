import { Equipo } from "./equipo";
import { Evento } from "./evento";
import { Juez } from "./juez";
import { Resultado } from "./resultado";

type Puntaje = [string, Array<Object>];

export class EventoGrupal extends Evento {

    private participantes: Array<Equipo> = [];
    private resultado: Map<number, Resultado> = new Map();

    constructor(id: number, fecha: Date, jueces: Array<Juez>, participantes: Array<Equipo>){
       super(id, fecha, jueces);
       this.participantes = participantes;
    }

    public getResultadoEquipo(idEquipo: number){
        try {
            let resultado = this.resultado.get(idEquipo);
            return resultado?.devolverPuntajeFinal();
            
        } catch (error) {
            console.log(error)
            return -1;
        }
    }

    public setResultado(puntajes: Array<Puntaje>, resultado: Resultado, idEquipo:  number){
        try {
            for(let i = 0; i < puntajes.length; i++){
                resultado.registrarPuntaje(puntajes[i][0], puntajes[i][1]);
            }
            this.resultado.set(idEquipo, resultado);
            return true;
        } catch (error) {
            return false;
        }
       

    }

    public setParticipante(equipo: Equipo){
        this.participantes.push(equipo);
    }
    
}



export const EVENTOSGRUPALES: EventoGrupal[] = [];

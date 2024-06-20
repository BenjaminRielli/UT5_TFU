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

    public agregarParticipante(equipo: Equipo){
        try {

            let antes = this.participantes.length;
            for(let i = 0; i < this.participantes.length; i++){
                if(equipo.id == this.participantes[i].id){
                    return false;
                }
            }
            
            // Legamos acá, no existe
            let ahora = this.participantes.length;
            this.participantes.push(equipo);
            
            return antes < ahora;
        } catch (error) {
            console.log(error)
            return false
        }
        
    }

    public quitarParticipante(equipo: Equipo){
        try {
            let antes = this.participantes.length
            this.participantes = this.participantes.filter((e) => e.id != equipo.id);
            let ahora = this.participantes.length

            return antes > ahora;
        } catch (error) {
            console.log(error)
            return false;
        }
    }

    public getParticipantes(){
        return this.participantes;
    }
    
}



export const EVENTOSGRUPALES: EventoGrupal[] = [];

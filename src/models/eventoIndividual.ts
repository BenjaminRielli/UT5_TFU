import { Atleta } from "./atleta";
import { Evento } from "./evento";
import { Juez } from "./juez";
import { Resultado } from "./resultado";

type Puntaje = [string, Array<Object>];

export class EventoIndividual extends Evento {

    private participantes: Array<Atleta> = [];
    private resultado: Map<string, Resultado> = new Map();

    constructor(id: number, fecha: Date, jueces: Array<Juez>, participantes: Array<Atleta>) {
        super(id, fecha, jueces);
        this.participantes = participantes;
    }

    public getResultadoAtleta(idAtleta: string) {
        try {
            let resultado = this.resultado.get(idAtleta);
            return resultado?.devolverPuntajeFinal();

        } catch (error) {
            console.log(error)
            return -1;
        }
    }

    public setResultado(puntajes: Array<Puntaje>, resultado: Resultado, idAtleta: string) {
        try {
            for (let i = 0; i < puntajes.length; i++) {
                resultado.registrarPuntaje(puntajes[i][0], puntajes[i][1]);
            }
            this.resultado.set(idAtleta, resultado);
            return true;
        } catch (error) {
            return false;
        }


    }

    public agregarParticipante(atleta: Atleta){
        try {

            let antes = this.participantes.length;
            for(let i = 0; i < this.participantes.length; i++){
                if(atleta.id == this.participantes[i].id){
                    return false;
                }
            }
            
            // Legamos acá, no existe
            let ahora = this.participantes.length;
            this.participantes.push(atleta);
            
            return antes < ahora;
        } catch (error) {
            console.log(error)
            return false
        }
        
    }

    public quitarParticipante(atleta: Atleta){
        try {
            let antes = this.participantes.length
            this.participantes = this.participantes.filter((a) => a.id != atleta.id);
            let ahora = this.participantes.length

            return antes > ahora;
        } catch (error) {
            console.log(error)
            return false;
        }
    }


    public getParticipantes() {
        return this.participantes;
    }
}






export const EVENTOSINDIVIDUALES: EventoIndividual[] = [];

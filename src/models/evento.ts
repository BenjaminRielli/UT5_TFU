
import { EventoGrupal } from "./eventoGrupal";
import { EventoIndividual } from "./eventoIndividual";
import { Juez } from "./juez";

export class Evento {


    
    private id: number;
    private fecha: Date;
    private jueces: Array<Juez>;

   constructor(id: number, fecha: Date, jueces: Array<Juez>){
        this.id = id;
        this.fecha = fecha;
        this.jueces = jueces;
    } 

    public agregarJuez(juez:Juez){
        try {
            for(let i = 0; i < this.jueces.length; i++){
                if(juez.id == this.jueces[i].id){
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


    public quitarJuez(juez:Juez){
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

    public getFecha(){
        return this.fecha;
    }
    
    // Solo getter, id no va a tener modificador
    public getId(){
        return this.id;
    }

    public setFecha(fecha: Date){
        this.fecha = fecha;
    }

    public getJueces(){
        return this.jueces;
    }

    

   
}

export const EVENTOS: any[] = [];
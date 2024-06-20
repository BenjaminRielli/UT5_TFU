import { Juez } from "./juez";

export class Evento {
    id: number;
    fecha: Date;
    jueces: Juez[];
    idCategoria: number;

    constructor(id: number, fecha: Date, idCategoria: number) {
        this.id = id;
        this.fecha = fecha;
        this.jueces = [];
        this.idCategoria = idCategoria;
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
}

export const EVENTOS: Evento[] = [];

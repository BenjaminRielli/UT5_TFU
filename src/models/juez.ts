import { Usuario } from "./usuario";

export class Juez extends Usuario {
    private nacionalidad: string = "";

    public getNacionalidad(){
        return this.nacionalidad;
    }

    public setNacionalidad(nacionalidad: string){
        this.nacionalidad = nacionalidad
    }
}

export const JUECES: Juez[] = [];
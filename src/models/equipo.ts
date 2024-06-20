import { Atleta } from "./atleta";

export class Equipo{
   private atletas: Atleta[] = [];

    constructor(id: number, atletas: Atleta[]){
        this.atletas = atletas;
        this.id = id;
    }
    get id(): number  {
        return this.id;
    }

    private set id(value:  number) {
        this.id = value;
    }


}

export const EQUIPOS: Equipo[] = [];
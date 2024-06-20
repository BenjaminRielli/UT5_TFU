import { Atleta } from "./atleta";
import { Sancion } from "./sanciones";

export class Equipo {
    id: string;
    nacionalidad: string;
    atletas: Atleta[];
    sanciones: Sancion[];

    constructor(id: string, nacionalidad: string, atletas: Atleta[], sanciones: Sancion[]) {
        this.id = id;
        this.nacionalidad = nacionalidad;
        this.atletas = atletas;
        this.sanciones = sanciones;
    }
}
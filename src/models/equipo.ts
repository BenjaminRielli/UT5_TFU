import { Atleta } from "./atleta";
import { Participante } from "./participante";
import { Resultado } from "./resultado";
import { Sancion } from "./sanciones";

export class Equipo implements Participante {
    id: string;
    nacionalidad: string;
    atletas: Atleta[];
    sanciones: Sancion[];
    resultado: Resultado = new Resultado();


    constructor(id: string, nacionalidad: string, atletas: Atleta[], sanciones: Sancion[]) {
        this.id = id;
        this.nacionalidad = nacionalidad;
        this.atletas = atletas;
        this.sanciones = sanciones;
    }
}
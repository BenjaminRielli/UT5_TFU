import { Equipo } from "./equipo";
import { Usuario } from "./usuario";

export interface Atleta extends Usuario {
    fechaNacimiento: Date;
    sexo: string;
    nacionalidad: string;
    equipos: Equipo[];
}

export const ATLETAS: Atleta[] = [];
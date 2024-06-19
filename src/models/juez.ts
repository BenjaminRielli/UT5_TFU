import { Usuario } from "./usuario";

export interface Juez extends Usuario {
    nacionalidad: string;
}

export const JUECES: Juez[] = [];
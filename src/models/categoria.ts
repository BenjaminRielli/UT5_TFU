import { Juez } from "./juez";

export interface Categoria {
    id: number;
    idDisciplina: number;
    nombre: string;
    eventos: Evento[];
}


export interface Evento {
    id: number;
    fecha: Date;
    jueces: Juez[];
}


export const CATEGORIAS: Categoria[] = [];
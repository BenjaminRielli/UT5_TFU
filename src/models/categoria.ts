import { Evento } from "./evento";


export interface Categoria {
    id: number;
    idDisciplina: number;
    nombre: string;
    eventos: Evento[];
}

export const CATEGORIAS: Categoria[] = [];
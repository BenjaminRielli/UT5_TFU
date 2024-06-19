import { Categoria } from "./categoria";

export interface Disciplina {
    nombre: string;
    id: number;
    categorias: Categoria[];
}

export const DISCIPLINAS: Disciplina[] = [];
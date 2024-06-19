import { Juez } from "./juez";


export interface Evento {
    id: number;
    fecha: Date;
    jueces: Juez[];
}

export const EVENTOS: Evento[] = [];
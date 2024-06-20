import { Evento } from "./evento";

export class Categoria {
    id: number;
    idDisciplina: number;
    nombre: string;
    eventos: Evento[];

    constructor(id: number, idDisciplina: number, nombre: string) {
        this.id = id;
        this.idDisciplina = idDisciplina;
        this.nombre = nombre;
        this.eventos = [];
    }
}

export const CATEGORIAS: Categoria[] = [];
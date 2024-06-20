import { Juez } from "./juez";

export class Evento {
    id: number;
    fecha: Date;
    jueces: Juez[];
    idCategoria: number;

    constructor(id: number, fecha: Date, idCategoria: number) {
        this.id = id;
        this.fecha = fecha;
        this.jueces = [];
        this.idCategoria = idCategoria;
    }
}
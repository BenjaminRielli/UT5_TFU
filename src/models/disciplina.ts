import { Categoria } from "./categoria";

export class Disciplina {
    nombre: string;
    id: number;
    categorias: Categoria[];

    constructor(nombre: string, id: number) {
        this.nombre = nombre;
        this.id = id;
        this.categorias = [];
    }
}
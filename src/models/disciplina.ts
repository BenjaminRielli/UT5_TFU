import { Prototype } from "../prototype";
import { Categoria } from "./categoria";

export class Disciplina implements Prototype {
    nombre: string;
    id: number;
    categorias: Categoria[];

    constructor(nombre: string, id: number) {
        this.nombre = nombre;
        this.id = id;
        this.categorias = [];
    }

    clone(): Disciplina {
        const disciplina= new Disciplina(this.nombre, this.id);
        return disciplina;
    }
}
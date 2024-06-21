import { Usuario } from "./usuario";

export class Juez extends Usuario {
    nacionalidad: string;

    constructor(id: string, nombre: string, apellido: string, email: string, telefono: string, contraseña: string, nacionalidad: string) {
        super(id, nombre, apellido, email, telefono, contraseña);
        this.nacionalidad = nacionalidad;
    }
}
export class Usuario {
    id: string;
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    contraseña: string;

    constructor(id: string, nombre: string, apellido: string, email: string, telefono: string, contraseña: string) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.telefono = telefono;
        this.contraseña = contraseña;
    }
}

export const USUARIOS: Usuario[] = [];
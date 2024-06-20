export class Usuario {

    constructor(id: string , nombre: string, apellido: string, email: string, telefono: string, contraseña: string) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.telefono = telefono;
        this.contraseña = contraseña;
    }

    get id(): string  {
        return this.id;
    }

    private set id(value: string | number) {
        this.id = value;
    }

    get nombre(): string {
        return this.nombre;
    }

    set nombre(value: string) {
        this.nombre = value;
    }

    get apellido(): string {
        return this.apellido;
    }

    set apellido(value: string) {
        this.apellido = value;
    }

    get email(): string {
        return this.email;
    }

    set email(value: string) {
        this.email = value;
    }

    get telefono(): string {
        return this.telefono;
    }

    set telefono(value: string) {
        this.telefono = value;
    }

    get contraseña(): string {
        return this.contraseña;
    }

    set contraseña(value: string) {
        this.contraseña = value;
    }
}

export const USUARIOS: Usuario[] = [];
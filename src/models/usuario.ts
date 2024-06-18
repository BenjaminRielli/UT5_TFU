export interface Usuario {
    id: string;
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    contraseña: string;    
}

export const USUARIOS: Usuario[] = [];
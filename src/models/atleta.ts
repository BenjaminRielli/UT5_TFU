import { Equipo } from "./equipo";
import { Usuario } from "./usuario";
import { Sancion } from "./sanciones";

export class Atleta extends Usuario {
    fechaNacimiento: Date;
    sexo: string;
    nacionalidad: string;
    equipos: Equipo[];
    sanciones: Sancion[];

    constructor(id: string, nombre: string, apellido: string, email: string, telefono: string, contraseña: string, fechaNacimiento: Date, sexo: string, nacionalidad: string, equipos: Equipo[], sanciones: Sancion[]) {
        super(id, nombre, apellido, email, telefono, contraseña);
        this.fechaNacimiento = fechaNacimiento;
        this.sexo = sexo;
        this.nacionalidad = nacionalidad;
        this.equipos = equipos;
        this.sanciones = sanciones;
    }
}
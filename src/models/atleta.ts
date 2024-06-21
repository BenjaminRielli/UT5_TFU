import { Equipo } from "./equipo";
import { Usuario } from "./usuario";
import { Sancion } from "./sanciones";
import { Participante } from "./participante";
import { Resultado } from "./resultado";

export class Atleta extends Usuario implements Participante {
    fechaNacimiento: Date;
    sexo: string;
    nacionalidad: string;
    equipos: Equipo[];
    sanciones: Sancion[];
    resultado: Resultado = new Resultado();
    

    constructor(id: string, nombre: string, apellido: string, email: string, telefono: string, contraseña: string, fechaNacimiento: Date, sexo: string, nacionalidad: string, equipos: Equipo[], sanciones: Sancion[]) {
        super(id, nombre, apellido, email, telefono, contraseña);
        this.fechaNacimiento = fechaNacimiento;
        this.sexo = sexo;
        this.nacionalidad = nacionalidad;
        this.equipos = equipos;
        this.sanciones = sanciones;
    }
}
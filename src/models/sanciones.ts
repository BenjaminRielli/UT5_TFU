export class Sancion {
    id: string;
    descripcion: string;
    gravedad: string;
    fechaInicio: Date;
    fechaFin: Date;

    constructor(id: string, descripcion: string, gravedad: string, fechaInicio: Date, fechaFin: Date) {
        this.id = id;
        this.descripcion = descripcion;
        this.gravedad = gravedad;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }
}
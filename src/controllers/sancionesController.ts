import { Sancion } from "../models/sanciones";
import { Atleta } from "../models/atleta";
import { ATLETAS } from "../models/database";
import { Equipo } from "../models/equipo";
import { EQUIPOS } from "../models/database";
import AtletaController from "./atletaController";


export class SancionesAtletasController {

    atletas: Atleta[] = ATLETAS;

    static add(id: string, descripcion: string, gravedad: string, fechaInicio: Date, fechaFin: Date, idAtleta: string): void {
        const sancion: Sancion = {
            id: id,
            descripcion: descripcion,
            gravedad: gravedad,
            fechaInicio: fechaInicio,
            fechaFin: fechaFin
        };

        const atleta: Atleta | undefined = AtletaController.getById(idAtleta);

        if (atleta != null) {
            atleta.sanciones.push(sancion);
        }
    }

    static eliminarSancion(idAtleta: string, idSancion: string): boolean {
        const atleta: Atleta | undefined = AtletaController.getById(idAtleta);

        if (atleta != null) {
            const cantidadInicial = atleta.sanciones.length;
            atleta.sanciones = atleta.sanciones.filter(s => s.id !== idSancion);
            return atleta.sanciones.length < cantidadInicial;
        }
        return false;
    }

    static modificarSancion(idAtleta: string, idSancion: string, descripcion: string, gravedad: string, fechaInicio: Date, fechaFin: Date): boolean {
        const atleta: Atleta | undefined = AtletaController.getById(idAtleta);

        if (atleta != null) {
            const sancion: Sancion | undefined = atleta.sanciones.find(s => s.id === idSancion);

            if (sancion != null) {
                sancion.descripcion = descripcion;
                sancion.gravedad = gravedad;
                sancion.fechaInicio = fechaInicio;
                sancion.fechaFin = fechaFin;
                return true;
            }
        }
        return false;
    }
}

export class SancionesEquiposController {

    equipos: Equipo[] = EQUIPOS;

    static add(id: string, descripcion: string, gravedad: string, fechaInicio: Date, fechaFin: Date, idEquipo: string): void {
        const sancion: Sancion = {
            id: id,
            descripcion: descripcion,
            gravedad: gravedad,
            fechaInicio: fechaInicio,
            fechaFin: fechaFin
        };

        const equipo: Equipo | undefined = EQUIPOS.find(e => e.id === idEquipo);

        if (equipo != null) {
            equipo.sanciones.push(sancion);
        }
    }

    static eliminarSancion(idEquipo: string, idSancion: string): boolean {
        const equipo: Equipo | undefined = EQUIPOS.find(e => e.id === idEquipo);

        if (equipo != null) {
            const cantidadInicial = equipo.sanciones.length;
            equipo.sanciones = equipo.sanciones.filter(s => s.id !== idSancion);
            return equipo.sanciones.length < cantidadInicial;
        }
        return false;
    }

    static modificarSancion(idEquipo: string, idSancion: string, descripcion: string, gravedad: string, fechaInicio: Date, fechaFin: Date): boolean {
        const equipo: Equipo | undefined = EQUIPOS.find(e => e.id === idEquipo);

        if (equipo != null) {
            const sancion: Sancion | undefined = equipo.sanciones.find(s => s.id === idSancion);

            if (sancion != null) {
                sancion.descripcion = descripcion;
                sancion.gravedad = gravedad;
                sancion.fechaInicio = fechaInicio;
                sancion.fechaFin = fechaFin;
                return true;
            }
        }
        return false;
    }
}
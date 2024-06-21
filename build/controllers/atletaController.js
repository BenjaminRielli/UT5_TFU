"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const atleta_1 = require("../models/atleta");
const usuarioController_1 = __importDefault(require("./usuarioController"));
class AtletaController {
    constructor() {
        this.atletas = atleta_1.ATLETAS;
    }
    static get() {
        return atleta_1.ATLETAS;
    }
    /**
    *
    * @param id
    * @returns instancia de usuario especificada; null si no existe.
    */
    static getById(id) {
        const u = atleta_1.ATLETAS.find(u => u.id == id);
        if (u == null) {
            console.log(`Error: no se pudo encontrar al atleta con id= '${id}'`);
        }
        return u;
    }
    static add(id, fechaNacimiento, sexo, nacionalidad) {
        const usuario = usuarioController_1.default.getById(id);
        if (usuario != null) {
            const atleta = {
                id: id,
                nombre: usuario.nombre,
                apellido: usuario.apellido,
                email: usuario.email,
                telefono: usuario.telefono,
                contraseña: usuario.contraseña,
                fechaNacimiento: fechaNacimiento,
                sexo: sexo,
                nacionalidad,
                equipos: []
            };
            atleta_1.ATLETAS.push(atleta);
            return atleta;
        }
        return null;
    }
    static eliminarAtleta(id) {
        const cantidadInicial = atleta_1.ATLETAS.length;
        const result = atleta_1.ATLETAS.filter(u => u.id !== id);
        return result.length < cantidadInicial;
    }
    /**
    *
    * @param id
    * @param contraseña
    */
    static login(id, contraseña) {
        const atleta = this.getById(id);
        if (atleta != null) {
            if (atleta.contraseña === contraseña) {
                console.log(`Inicio de sesion aprobado. ¡Bienvenido ${atleta.nombre}!`);
                // navegar usuario hacia menu de atletas + otorgar permisos de atleta
                return true;
            }
            console.log('Error: contraseña incorrecta. Por favor vuelva a intentarlo.');
            return false;
        }
        return false;
    }
}
module.exports = AtletaController;

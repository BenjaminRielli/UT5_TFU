"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const atleta_1 = require("../models/atleta");
const juez_1 = require("../models/juez");
const usuario_1 = require("../models/usuario");
const atletaController_1 = __importDefault(require("./atletaController"));
const usuarioController_1 = __importDefault(require("./usuarioController"));
class JuezController {
    constructor() {
        this.usuarios = usuario_1.USUARIOS;
        this.atletas = atleta_1.ATLETAS;
        this.jueces = juez_1.JUECES;
    }
    static get() {
        return juez_1.JUECES;
    }
    /**
    *
    * @param id
    * @returns instancia de juez especificada; null si no existe.
    */
    static getById(id) {
        const u = juez_1.JUECES.find(u => u.id == id);
        if (u == null) {
            console.log(`Error: no se pudo encontrar al juez con id= '${id}'`);
        }
        return u;
    }
    static add(id, nacionalidad) {
        const usuario = usuarioController_1.default.getById(id);
        if (usuario != null) {
            const juez = {
                id: id,
                nombre: usuario.nombre,
                apellido: usuario.apellido,
                email: usuario.email,
                telefono: usuario.telefono,
                contraseña: usuario.contraseña,
                nacionalidad: nacionalidad
            };
            juez_1.JUECES.push(juez);
            return juez;
        }
        return null;
    }
    /**
     *
     * @param idUsuario
     * @param fechaNacimiento
     * @param sexo
     * @param nacionalidad
     * @returns
     */
    calificarAtleta(idAtleta, idDisciplina) {
        const atleta = atletaController_1.default.getById(idAtleta);
        if (atleta != null) {
        }
    }
    /**
    *
    * @param id
    * @returns exito de la operacion
    */
    eliminarAtleta(id) {
        const cantidadInicial = this.atletas.length;
        const result = this.atletas.filter(u => u.id !== id);
        return result.length < cantidadInicial;
    }
    /**
    *
    * @param id
    * @param contraseña
    */
    static login(id, contraseña) {
        const juez = this.getById(id);
        if (juez != null) {
            if (juez.contraseña === contraseña) {
                console.log(`Inicio de sesion aprobado. ¡Bienvenido ${juez.nombre}!`);
                // navegar usuario hacia menu de jueces + otorgar permisos de juez
                return true;
            }
            console.log('Error: contraseña incorrecta. Por favor vuelva a intentarlo.');
            return false;
        }
        return false;
    }
}
module.exports = JuezController;

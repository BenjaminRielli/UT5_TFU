"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const administrador_1 = require("../models/administrador");
const atletaController_1 = __importDefault(require("./atletaController"));
const juezController_1 = __importDefault(require("./juezController"));
class AdministradorController {
    static get() {
        return administrador_1.ADMINISTRADORES;
    }
    /**
    *
    * @param id
    * @returns instancia de administrador especificada; null si no existe.
    */
    static getById(id) {
        const u = administrador_1.ADMINISTRADORES.find(u => u.id == id);
        if (u == null) {
            console.log(`Error: no se pudo encontrar al administrador con id= '${id}'`);
        }
        return u;
    }
    /**
     *
     * @param idUsuario
     * @param fechaNacimiento
     * @param sexo
     * @param nacionalidad
     * @returns
     */
    registrarAtleta(idUsuario, fechaNacimiento, sexo, nacionalidad) {
        return atletaController_1.default.add(idUsuario, fechaNacimiento, sexo, nacionalidad);
    }
    /**
    *
    * @param id
    * @returns exito de la operacion
    */
    eliminarAtleta(id) {
        return atletaController_1.default.eliminarAtleta(id);
    }
    registrarJuez(idUsuario, nacionalidad) {
        return juezController_1.default.add(idUsuario, nacionalidad);
    }
    /**
    *
    * @param id
    * @param contraseña
    */
    static login(id, contraseña) {
        const admin = this.getById(id);
        if (admin != null) {
            if (admin.contraseña === contraseña) {
                console.log(`Inicio de sesion aprobado. ¡Bienvenido ${admin.nombre}!`);
                // navegar usuario hacia menu de admins + otorgar permisos de admin
                return true;
            }
            console.log('Error: contraseña incorrecta. Por favor vuelva a intentarlo.');
            return false;
        }
        return false;
    }
}
module.exports = AdministradorController;

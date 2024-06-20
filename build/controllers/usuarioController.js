"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const usuario_1 = require("../models/usuario");
const administradorController_1 = __importDefault(require("./administradorController"));
const atletaController_1 = __importDefault(require("./atletaController"));
const juezController_1 = __importDefault(require("./juezController"));
class UsuarioController {
    static get() {
        return usuario_1.USUARIOS;
    }
    /**
    *
    * @param id
    * @returns instancia de usuario especificada; null si no existe.
    */
    static getById(id) {
        const u = usuario_1.USUARIOS.find(u => u.id == id);
        if (u == null) {
            console.log(`Error: no se pudo encontrar al usuario con id= '${id}'`);
        }
        return u;
    }
    /**
    *
    * @param id
    * @param nombre
    * @param apellido
    * @param email
    * @param telefono
    * @param contraseña
    * @returns instancia de usuario creada
    */
    static add(id, nombre, apellido, email, telefono, contraseña) {
        const nuevoUsuario = {
            id: id,
            nombre: nombre,
            apellido: apellido,
            email: email,
            telefono: telefono,
            contraseña: contraseña
        };
        usuario_1.USUARIOS.push(nuevoUsuario);
        return nuevoUsuario;
    }
    /**
    *
    * @param id
    * @returns exito de la operacion
    */
    static delete(id) {
        const cantidadInicial = usuario_1.USUARIOS.length;
        const result = usuario_1.USUARIOS.filter(u => u.id !== id);
        return result.length < cantidadInicial;
    }
    /**
    *
    * @param id
    * @param contraseña
    */
    static login(id, contraseña, tipoUsuario) {
        const usuario = this.getById(id);
        if (usuario != null) {
            if (tipoUsuario.toLocaleLowerCase() === 'atleta') {
                return atletaController_1.default.login(id, contraseña);
            }
            else if (tipoUsuario.toLocaleLowerCase() === 'juez') {
                return juezController_1.default.login(id, contraseña);
            }
            else if (tipoUsuario.toLocaleLowerCase() === 'administrador') {
                return administradorController_1.default.login(id, contraseña);
            }
            console.log(`Error: el tipo de usuario '${tipoUsuario}' no es valido. Por favor vuelva a intentarlo.`);
            return false;
        }
        console.log(`Error: no se pudo encontrar al usuario con id= '${id}'. Por favor vuelva a intentarlo.`);
        return false;
    }
}
module.exports = UsuarioController;

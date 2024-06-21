import { Atleta } from "../models/atleta";
import { ATLETAS } from "../models/database";
import { Juez } from "../models/juez";
import { JUECES } from "../models/database";
import { Usuario } from "../models/usuario";
import { USUARIOS } from "../models/database";
import AtletaController from "./atletaController";
import UsuarioController from "./usuarioController";

class JuezController {

    usuarios: Usuario[] = USUARIOS;
    atletas: Atleta[] = ATLETAS;
    jueces: Juez[] = JUECES;

    static get(): Juez[] {
        return JUECES;
    }

    /**
    * 
    * @param id 
    * @returns instancia de juez especificada; null si no existe.
    */
    static getById(id: string): Juez | undefined {
        const u = JUECES.find(u => u.id == id);
        if (u == null) {
            console.log(`Error: no se pudo encontrar al juez con id= '${id}'`);
        }
        return u;
    }

    static add(id: string, nacionalidad: string) {
        const usuario: Usuario | undefined = UsuarioController.getById(id);
        if (usuario != null) {
            const juez: Juez = {
                id: id,
                nombre: usuario.nombre,
                apellido: usuario.apellido,
                email: usuario.email,
                telefono: usuario.telefono,
                contraseña: usuario.contraseña,
                nacionalidad: nacionalidad
            };
            JUECES.push(juez);
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
    calificarAtleta(idAtleta: string, idDisciplina: string): void {
        const atleta: Atleta | undefined = AtletaController.getById(idAtleta);
        if (atleta != null) {

        }
    }

    /**
    * 
    * @param id 
    * @returns exito de la operacion
    */
    eliminarAtleta(id: string): boolean {
        const cantidadInicial = this.atletas.length;
        const result = this.atletas.filter(u => u.id !== id);
        return result.length < cantidadInicial;
    }

    /**
    * 
    * @param id 
    * @param contraseña 
    */
    static login(id: string, contraseña: string): boolean {
        const juez: Juez | null = this.getById(id)!;
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

export = JuezController;

import { Administrador, ADMINISTRADORES } from "../models/administrador";
import { Atleta } from "../models/atleta";
import { Equipo } from "../models/equipo";
import { Juez } from "../models/juez";
import { Usuario } from "../models/usuario";
import AtletaController from "./atletaController";
import JuezController from "./juezController";
import UsuarioController from "./usuarioController";

class AdministradorController {
    
    static get() : Administrador[] {
        return ADMINISTRADORES;
    }
    
    /**
    * 
    * @param id 
    * @returns instancia de administrador especificada; null si no existe.
    */
    static getById(id: string): Administrador | undefined {
        const u = ADMINISTRADORES.find(u => u.id==id);
        if(u == null){
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
    registrarAtleta(idUsuario: string, fechaNacimiento: Date, sexo: string, nacionalidad: string) : Atleta | null {
        return AtletaController.add(idUsuario, fechaNacimiento, sexo, nacionalidad);
    }
    
    /**
    * 
    * @param id 
    * @returns exito de la operacion
    */
    eliminarAtleta(id: string) : boolean {
        return AtletaController.eliminarAtleta(id);
    }

    registrarJuez(idUsuario: string, nacionalidad: string) : Juez | null {
        return JuezController.add(idUsuario, nacionalidad);
    }
    
    /**
    * 
    * @param id 
    * @param contraseña 
    */
    static login(id: string, contraseña: string): boolean {
        const admin : Administrador | null = this.getById(id)!;
        if(admin != null){
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

export = AdministradorController;
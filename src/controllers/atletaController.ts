import { Administrador, ADMINISTRADORES } from "../models/administrador";
import { Atleta, ATLETAS } from "../models/atleta";
import { Equipo } from "../models/equipo";
import { Juez, JUECES } from "../models/juez";
import { Usuario, USUARIOS } from "../models/usuario";
import UsuarioController from "./usuarioController";

class AtletaController {
    
    atletas: Atleta[] = ATLETAS;
    
    static get() : Atleta[] {
        return ATLETAS;
    }
    
    /**
    * 
    * @param id 
    * @returns instancia de usuario especificada; null si no existe.
    */
    static getById(id: string): Atleta | undefined {
        const u = ATLETAS.find(u => u.id==id);
        if(u == null){
            console.log(`Error: no se pudo encontrar al atleta con id= '${id}'`);
        }
        return u;
    }
    
    /**
    * 
    * @param id 
    * @param contraseña 
    */
    static login(id: string, contraseña: string): boolean {
        const atleta : Atleta | null = this.getById(id)!;
        if(atleta != null){
            if (atleta.contraseña === contraseña) {
                console.log(`Inicio de sesion aprobado. ¡Bienvenido ${atleta.nombre}!`);
                return true;
            }
            console.log('Error: contraseña incorrecta. Por favor vuelva a intentarlo.');
            return false;
        }
        return false;
    }
}

export = AtletaController;

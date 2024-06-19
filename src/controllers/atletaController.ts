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

    static add(id:string,  fechaNacimiento: Date, sexo: string, nacionalidad: string): Atleta | null {
        const usuario: Usuario | undefined = UsuarioController.getById(id);
        if(usuario != null) {
            const atleta : Atleta = {
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
            }
            ATLETAS.push(atleta);
            return atleta;
        }
        return null;
    }

    static eliminarAtleta(id: string): boolean {
        const cantidadInicial= ATLETAS.length;
        const result = ATLETAS.filter(u => u.id !== id);
        return result.length < cantidadInicial;
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
                // navegar usuario hacia menu de atletas + otorgar permisos de atleta
                return true;
            }
            console.log('Error: contraseña incorrecta. Por favor vuelva a intentarlo.');
            return false;
        }
        return false;
    }


}

export = AtletaController;

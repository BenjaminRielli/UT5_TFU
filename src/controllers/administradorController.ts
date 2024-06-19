import { Administrador, ADMINISTRADORES } from "../models/administrador";
import { Atleta, ATLETAS } from "../models/atleta";
import { Equipo } from "../models/equipo";
import { Juez, JUECES } from "../models/juez";
import { Usuario, USUARIOS } from "../models/usuario";
import UsuarioController from "./usuarioController";

class AdministradorController {
    
    usuarios: Usuario[] = USUARIOS;
    atletas: Atleta[] = ATLETAS;
    jueces: Juez[] = JUECES;
    
    static get() : Administrador[] {
        return ADMINISTRADORES;
    }
    
    /**
    * 
    * @param id 
    * @returns instancia de usuario especificada; null si no existe.
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
        const usuario: Usuario | undefined = UsuarioController.getById(idUsuario);
        if(usuario != null) {
            const atleta : Atleta = {
                id: idUsuario,
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
            this.atletas.push(atleta);
            return atleta;
        }
        return null;
    }
    
    /**
    * 
    * @param id 
    * @returns exito de la operacion
    */
    eliminarAtleta(id: string) : boolean {
        const cantidadInicial= this.atletas.length;
        const result = this.atletas.filter(u => u.id !== id);
        return result.length < cantidadInicial;
    }

    registrarJuez(idUsuario: string, nacionalidad: string) : Juez | null {
        const usuario: Usuario | undefined = UsuarioController.getById(idUsuario);
        if(usuario != null) {
            const juez : Juez = {
                id: idUsuario,
                nombre: usuario.nombre,
                apellido: usuario.apellido,
                email: usuario.email,
                telefono: usuario.telefono,
                contraseña: usuario.contraseña,
                nacionalidad
            }
            this.jueces.push(juez);
            return juez;
        }
        return null;
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
                return true;
            }
            console.log('Error: contraseña incorrecta. Por favor vuelva a intentarlo.');
            return false;
        }
        return false;
    }
}

export = AdministradorController;

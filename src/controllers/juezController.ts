import { Administrador, ADMINISTRADORES } from "../models/administrador";
import { Atleta, ATLETAS } from "../models/atleta";
import { Equipo } from "../models/equipo";
import { Juez, JUECES } from "../models/juez";
import { Usuario, USUARIOS } from "../models/usuario";
import AtletaController from "./atletaController";
import UsuarioController from "./usuarioController";

class JuezController {
    
    usuarios: Usuario[] = USUARIOS;
    atletas: Atleta[] = ATLETAS;
    jueces: Juez[] = JUECES;
    
    static get() : Juez[] {
        return JUECES;
    }
    
    /**
    * 
    * @param id 
    * @returns instancia de juez especificada; null si no existe.
    */
    static getById(id: string): Juez | undefined {
        const u = JUECES.find(u => u.id==id);
        if(u == null){
            console.log(`Error: no se pudo encontrar al juez con id= '${id}'`);
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
    calificarAtleta(idAtleta: string, idDisciplina: string) : void {
        const atleta: Atleta | undefined = AtletaController.getById(idAtleta);
        if(atleta != null) {

        }
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
    
    /**
    * 
    * @param id 
    * @param contraseña 
    */
    static login(id: string, contraseña: string): boolean {
        const juez : Juez | null = this.getById(id)!;
        if(juez != null){
            if (juez.contraseña === contraseña) {
                console.log(`Inicio de sesion aprobado. ¡Bienvenido ${juez.nombre}!`);
                return true;
            }
            console.log('Error: contraseña incorrecta. Por favor vuelva a intentarlo.');
            return false;
        }
        return false;
    }
}

export = JuezController;

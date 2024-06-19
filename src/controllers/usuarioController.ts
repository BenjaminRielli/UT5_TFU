import { Usuario, USUARIOS } from "../models/usuario";

class UsuarioController {
    
    static get() : Usuario[] {
        return USUARIOS;
    }
    
    /**
    * 
    * @param id 
    * @returns instancia de usuario especificada; null si no existe.
    */
    static getById(id: string): Usuario | undefined {
        const u = USUARIOS.find(u => u.id==id);
        if(u == null){
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
    static add(id: string, nombre: string, apellido: string, email: string, telefono: string, contraseña: string): Usuario {
        const nuevoUsuario : Usuario = {
            id: id,
            nombre: nombre,
            apellido: apellido,
            email: email,
            telefono: telefono,
            contraseña: contraseña
        }
        USUARIOS.push(nuevoUsuario);
        return nuevoUsuario;
    }
    
    /**
    * 
    * @param id 
    * @returns exito de la operacion
    */
    static delete(id: string) : boolean {
        const cantidadInicial= USUARIOS.length;
        const result = USUARIOS.filter(u => u.id !== id);
        return result.length < cantidadInicial;
    }
    
    /**
    * 
    * @param id 
    * @param contraseña 
    */
    static login(id: string, contraseña: string, tipoUsuario: string): boolean {
        const usuario : Usuario | null = this.getById(id)!;
        if(usuario != null){
            if(tipoUsuario === 'atleta'){
                AtletaControlador.login(id, contraseña);
            }
            console.log('Error: contraseña incorrecta. Por favor vuelva a intentarlo.');
            return false;
        }
        return false;
    }
}

export = UsuarioController;

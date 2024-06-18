import { Usuario, USUARIOS } from "../models/usuario";

class UsuarioController {
    
    get() : Usuario[] {
        return USUARIOS;
    }
    
    /**
    * 
    * @param id 
    * @returns instancia de usuario especificada; null si no existe.
    */
    getById(id: string): Usuario | undefined {
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
    add(id: string, nombre: string, apellido: string, email: string, telefono: string, contraseña: string): Usuario {
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
    delete(id: string) : boolean {
        const cantidadInicial= USUARIOS.length;
        const result = USUARIOS.filter(u => u.id !== id);
        return result.length < cantidadInicial;
    }
    
    /**
    * 
    * @param id 
    * @param contraseña 
    */
    login(id: string, contraseña: string): boolean {
        const usuario : Usuario | null = this.getById(id)!;
        if(usuario != null){
            if (usuario.contraseña === contraseña) {
                console.log(`Inicio de sesion aprobado. ¡Bienvenido ${usuario.nombre}!`);
                return true;
            }
            console.log('Error: contraseña incorrecta. Por favor vuelva a intentarlo.');
            return false;
        }
        return false;
    }
}

export = UsuarioController;

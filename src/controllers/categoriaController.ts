import { Categoria, CATEGORIAS } from "../models/categoria";
import DisciplinaController from "./disciplinaController";

class CategoriaController {
    
    categorias: Categoria[] = CATEGORIAS;
    
    static get() : Categoria[] {
        return CATEGORIAS;
    }
    
    /**
    * 
    * @param id 
    * @returns instancia de Categoria especificada; null si no existe.
    */
    static getById(id: number): Categoria | undefined {
        const u = CATEGORIAS.find(u => u.id==id);
        if(u == null){
            console.log(`Error: no se pudo encontrar la Categoria con id= '${id}'`);
        }
        return u;
    }

    /**
    * 
    * @param id 
    * @returns True si fue eliminada correctamente; False si no fue eliminada o no existe.
    */
    static eliminarCategoria(id: number): boolean {        
        const categoria = CategoriaController.getById(id);
        if(categoria != null){
            const disciplina = DisciplinaController.getById(categoria.idDisciplina);
            if(disciplina != null){
                const index1 = disciplina.categorias.findIndex(d => d.id === id);
                const index2 = CATEGORIAS.findIndex(d => d.id === id);
                disciplina.categorias.splice(index1, 1);
                CATEGORIAS.splice(index2, 1);
                return true;
            }
        }
        return false;
    }

}

export = CategoriaController;

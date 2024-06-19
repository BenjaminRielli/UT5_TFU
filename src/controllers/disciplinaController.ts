import { Categoria, CATEGORIAS } from "../models/categoria";
import { Disciplina, DISCIPLINAS } from "../models/disciplina";

class DisciplinaController {
    
    disciplinas: Disciplina[] = DISCIPLINAS;
    
    static get() : Disciplina[] {
        return DISCIPLINAS;
    }
    
    /**
    * 
    * @param id 
    * @returns instancia de disciplina especificada; null si no existe.
    */
    static getById(id: number): Disciplina | undefined {
        const u = DISCIPLINAS.find(u => u.id==id);
        if(u == null){
            console.log(`Error: no se pudo encontrar la disciplina con id= '${id}'`);
        }
        return u;
    }

    static add(nombre:string,  id: number): Disciplina | null {
        const disciplina: Disciplina | undefined = DisciplinaController.getById(id);
        if(disciplina == null) {
            const disciplinaNueva : Disciplina = {
                nombre: nombre,
                id: id,
                categorias: []
            }
            DISCIPLINAS.push(disciplinaNueva);
            return disciplinaNueva;
        }
        return null;
    }

    static eliminarDisciplina(id: number): boolean {
        const index = DISCIPLINAS.findIndex(d => d.id === id);
        if(index !== -1){
            DISCIPLINAS.splice(index, 1);
            return true;
        }
        return false;
    }
    
    /**
    * 
    * @param number 
    * @param nombreCategoria 
    */
    static registrarCategoria(idDisciplina: number, nombreCategoria: string): Categoria | null{
        const disciplina: Disciplina | undefined = DisciplinaController.getById(idDisciplina);
        if(disciplina != null){
            const cantCategorias = disciplina.categorias.length;
            const categoriaNueva: Categoria = {
                id: cantCategorias + 1,
                idDisciplina: idDisciplina,
                nombre: nombreCategoria,
                eventos: []  
            }
            disciplina.categorias.push(categoriaNueva);
            CATEGORIAS.push(categoriaNueva);
            return categoriaNueva;
        }
        return null;
    }
}

export = DisciplinaController;

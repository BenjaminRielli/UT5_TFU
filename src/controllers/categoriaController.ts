import { Categoria, CATEGORIAS } from "../models/categoria";
import { Evento } from "../models/evento";
import DisciplinaController from "./disciplinaController";
import { Juez } from "../models/juez";
import { Atleta } from "../models/atleta";
import { Equipo } from "../models/equipo";
import { Participante } from "../models/participante";

class CategoriaController {
    categorias: Categoria[] = CATEGORIAS;

    static get(): Categoria[] {
        return CATEGORIAS;
    }

    /**
    * 
    * @param id 
    * @returns instancia de Categoria especificada; null si no existe.
    */
    static getById(id: number): Categoria | undefined {
        const u = CATEGORIAS.find(u => u.id === Number(id));
        if (u == null) {
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
        if (categoria != null) {
            const disciplina = DisciplinaController.getById(categoria.idDisciplina);

            if (disciplina != null) {
                const index1 = disciplina.categorias.findIndex(d => d.id === id);
                const index2 = CATEGORIAS.findIndex(d => d.id === id);
                disciplina.categorias.splice(index1, 1);
                CATEGORIAS.splice(index2, 1);
                return true;
            }
        }
        return false;
    }

    /**
     * 
     * @param id 
     * @returns Array de eventos de la categoria especificada; vacío si no existen eventos o la categoria no existe.
     */
    static verEventosCategoria(id: number): Evento[] {
        const categoria = CategoriaController.getById(id);
        if (categoria != null) {
            return categoria.eventos;
        } else {
            console.log(`Error: no se pudo encontrar la Categoria con id= '${id}'`);
            return [];
        }
    }

    /**
     * 
     * @param idCategoria 
     * @param fecha 
     * @param id 
     * @returns El nuevo evento si fue creado; null si ya existe un evento con ese id.
     */
    static addEvento(idCategoria: number, fecha: Date, id: number): Evento | null {
        const categoria = CategoriaController.getById(idCategoria);
        if (categoria != null) {
            const eventoExistente = categoria.eventos.find(e => e.id === id);
            if (eventoExistente == null) {
                const nuevoEvento: Evento = new Evento(
                    id,
                    fecha,
                    idCategoria
                );
                categoria.eventos.push(nuevoEvento);
                return nuevoEvento;
            }
        }
        return null;
    }

    /**
     * 
     * @param idCategoria 
     * @param idEvento 
     * @returns True si el evento fue eliminado; False si el evento o la categoría no existen.
     */
    static eliminarEvento(idCategoria: number, idEvento: number): boolean {
        const categoria = CategoriaController.getById(idCategoria);
        if (categoria != null) {
            const index = categoria.eventos.findIndex(e => e.id === idEvento);
            if (index !== -1) {
                categoria.eventos.splice(index, 1);
                return true;
            }
        }
        return false;
    }

    /**
     * 
     * @param idCategoria 
     * @param idEvento 
     * @param juez 
     * @returns El juez registrado si fue agregado correctamente; null si el evento o la categoría no existen.
     */
    static registrarJuez(idCategoria: number, idEvento: number, juez: Juez): Juez | null {
        const categoria = CategoriaController.getById(idCategoria);
        if (categoria != null) {
            const evento = categoria.eventos.find(e => e.id === idEvento);
            if (evento != null) {
                evento.jueces.push(juez);
                return juez;
            }
        }
        return null;
    }

    /**
     * 
     * @param idCategoria 
     * @param idEvento 
     * @param idJuez 
     * @returns True si el juez fue eliminado; False si el evento, la categoría o el juez no existen.
     */
    static eliminarJuez(idCategoria: number, idEvento: number, idJuez: number): boolean {
        const categoria = CategoriaController.getById(idCategoria);
        if (categoria != null) {
            const evento = categoria.eventos.find(e => e.id === idEvento);
            if (evento != null) {
                const index = evento.jueces.findIndex(j => j.id === idJuez.toString());
                if (index !== -1) {
                    evento.jueces.splice(index, 1);
                    return true;
                }
            }
        }
        return false;
    }



    static agregarParticipante(idCategoria: number, participante: Equipo | Atleta, idEvento: number) {
        try {
            const categoria = CategoriaController.getById(idCategoria);
            if (categoria != null) {
                const evento = categoria.eventos.find(e => e.id === idEvento);
                if (evento == undefined) {
                    throw new Error("No existe dicho evento");
                }
                if (!evento.agregarParticipante(participante)) {
                    throw new Error("No se pudo agregar al equipo")
                }
            }
            return true;
        } catch (error) {
            console.log(error)
            return false;

        }
    }

    static quitarParticipante(participante: Participante, idEvento: number, idCategoria: number) {
        try {
            const categoria = CategoriaController.getById(idCategoria);
            if(categoria == null){
                throw new Error("No existe la categoría")
            }

            const evento = categoria.eventos.find(evento => evento.id === idEvento);
            if (evento == undefined) {
                throw new Error("No existe dicho evento");
            }

            if (!evento.quitarParticipante(participante)) {
                throw new Error("No se pudo quitar el equipo, no existe")
            }

            return true;
        } catch (error) {
            console.log(error)
            return false;

        }
    }
}

export = CategoriaController;

import { Resultado } from "../models/resultado";
import { ResultadoAtletismo } from "../models/resultadoAtletismo";
import { Puntaje } from "../models/puntaje";
import CategoriaController from "./categoriaController";
import DisciplinaController from "./disciplinaController";

class EventoController {

    static posiblesResultados: Map<string, Resultado> = new Map([["atletismo", new ResultadoAtletismo()]]);

    static calificar(idDisciplina: number, idCategoria: number, idEvento: number, idParticipante: string | number, idJuez: string, datos: Array<Object>, categoriaEvento: string){

        try {
            let newResultado = this.posiblesResultados.get(categoriaEvento.toLowerCase());
            if (newResultado == null) {
                return null;
            }


            const disciplina = DisciplinaController.getById(idDisciplina);
            if (disciplina == undefined) {
                throw new Error("No existe la disciplina")
            }
            
            const categoria = disciplina.categorias.find((c) => c.id == idCategoria)
            if (categoria == undefined) {
                throw new Error("No existe la categoría")
            }

            const evento = categoria.eventos.find((e) => e.id == idEvento)
            if (evento == undefined) {
                throw new Error("No existe dicho evento");
            }

            // Comprobamos que el juez sea parte del evento
            const juez = evento.jueces.find((j) => j.id == idJuez)
            if(juez == undefined){
                throw new Error("El juez no participa de este evento")
            }

            // Comprobamos que el participante exista
            const participante = evento.participantes.find((p) => p.id == idParticipante)
            if(participante == undefined){
                throw new Error("El participante no existe en este evento")
            }


            // Caliifcamos al participante
            evento.setResultado(idJuez, datos, newResultado, idParticipante);
            return evento.getResultado(idParticipante);

        } catch (error) {
            console.log(error)
            return false;

        }
    }

}

export = EventoController;

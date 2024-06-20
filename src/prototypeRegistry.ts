import { Disciplina } from "./models/disciplina";

export class PrototypeRegistry {
    
    disciplinas: Disciplina[]= [];
    
    agregarDisciplina(disciplina: Disciplina): void
    {
        if(disciplina){
            this.disciplinas.push(disciplina);
        }
    }

    getById(id: number): Disciplina | undefined {
        const disciplina= this.disciplinas.find(d => d.id == id);
        return disciplina?.clone();
    }
}
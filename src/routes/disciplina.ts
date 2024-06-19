import express from 'express';
import AtletaController from '../controllers/atletaController';
import { Atleta } from '../models/atleta';
import { Disciplina } from '../models/disciplina';
import DisciplinaController from '../controllers/disciplinaController';


const router = express.Router();

/* GET all Disciplinas. */
router.get('/', (req, res) => {
    try {
        const disciplinas: Disciplina[] = DisciplinaController.get();
        res.status(200)
            .json(disciplinas);
    } catch (error) {
        res.status(500)
            .json({ success: false, message: 'Internal Server Error', details: 'Failed to retrieve disciplinas data.' });
    }
});

/* GET disciplina by id */
router.get('/:id', (req, res) => {
    const { id } = req.params;
    try {
        const idInt = parseInt(id);
        const disciplina = DisciplinaController.getById(idInt);
        if (!disciplina) {
            res.status(404).json({ message: `disciplina '${id}' not found.` });
        } else {
            res.status(200).json(disciplina);
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal Server Error', details: `Failed to retrieve disciplina '${id}' data.` });
    }
});

router.post('/', (req, res) => {
    const nombre = req.body.nombre;
    const id = req.body.id;
    try {
        const disciplina = DisciplinaController.add(nombre, id);                
        if(disciplina == null){
            
            res.status(404).json({ message: `disciplina '${id}' already exist.` });
            } else {
                res.status(200).json(disciplina);
            }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal Server Error', details: `Failed to retrieve disciplina '${id}' data.` });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const idInt = parseInt(req.params.id);
        const eliminada = DisciplinaController.eliminarDisciplina(idInt);
        if(eliminada == true){
            res.status(200).json({ message: 'Disciplina eliminada correctamente' });
        }else{
            res.status(404).json({ message: `disciplina '${idInt}' not found.` });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal Server Error', details: `Failed to retrieve disciplina '${req.params.id}' data.` });
    }
});

export default router;
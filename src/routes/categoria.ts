import express from 'express';

import AtletaController from '../controllers/atletaController';
import { Atleta } from '../models/atleta';
import { Disciplina } from '../models/disciplina';
import DisciplinaController from '../controllers/disciplinaController';
import CategoriaController from '../controllers/categoriaController';

import { Categoria } from '../models/categoria';
import { Juez } from '../models/juez';
import { Evento } from '../models/evento';


const router = express.Router();

/* GET all Categorias. */
router.get('/', (req, res) => {
    try {
        const categorias: Categoria[] = CategoriaController.get();

        res.status(200)
            .json(categorias);
    } catch (error) {
        res.status(500)
            .json({ success: false, message: 'Internal Server Error', details: 'Failed to retrieve categorias data.' });
    }
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    try {
        const idInt = parseInt(id);
        const categoria = CategoriaController.getById(idInt);
        if (!categoria) {
            res.status(404).json({ message: `categoria '${id}' not found.` });
        } else {
            res.status(200).json(categoria);
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal Server Error', details: `Failed to retrieve categoria '${id}' data.` });
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const idInt = parseInt(req.params.id);
        const eliminada = CategoriaController.eliminarCategoria(idInt);
        if(eliminada == true){
            res.status(200).json({ message: 'Categoria eliminada correctamente de todas las disciplinas' });
        }else{
            res.status(404).json({ message: `categoria '${idInt}' not found.` });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal Server Error', details: `Failed to retrieve categoria '${req.params.id}' data.` });
    }
});

router.patch('/categoria', async (req, res) => {
    try {
        const id: number = req.body.id;
        const nombre = req.body.nombre
        const categoria = DisciplinaController.registrarCategoria(id, nombre);
        if(categoria != null){
            res.status(200).json({ message: 'Categoria agregada correctamente' });
        }else{
            res.status(404).json({ message: `ERROR al agregar la categoria` });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal Server Error'});
    }
})

/* GET eventos by categoria id */
router.get('/:id/eventos', (req, res) => {
    const { id } = req.params;
    try {
        const idInt = parseInt(id);
        const eventos: Evento[] = CategoriaController.verEventosCategoria(idInt);
        if (!eventos) {
            res.status(404).json({ message: `eventos for categoria '${id}' not found.` });
        } else {
            res.status(200).json(eventos);
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal Server Error', details: `Failed to retrieve eventos for categoria '${id}' data.` });
    }
});

/* POST add evento to categoria */
router.post('/:id/eventos', (req, res) => {
    const { id } = req.params;
    const { fecha, idEvento } = req.body;
    try {
        const idInt = parseInt(id);
        const nuevoEvento = CategoriaController.addEvento(idInt, new Date(fecha), idEvento);
        if (nuevoEvento) {
            res.status(201).json(nuevoEvento);
        } else {
            res.status(400).json({ message: `Failed to add evento. Evento with id '${idEvento}' may already exist.` });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal Server Error', details: `Failed to add evento for categoria '${id}' data.` });
    }
});

/* DELETE evento by id from categoria */
router.delete('/:id/eventos/:idEvento', (req, res) => {
    const { id, idEvento } = req.params;
    try {
        const idInt = parseInt(id);
        const idEventoInt = parseInt(idEvento);
        const eliminado = CategoriaController.eliminarEvento(idInt, idEventoInt);
        if (eliminado) {
            res.status(200).json({ message: 'Evento eliminado correctamente' });
        } else {
            res.status(404).json({ message: `Evento '${idEvento}' not found in categoria '${id}'.` });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal Server Error', details: `Failed to delete evento '${idEvento}' for categoria '${id}' data.` });
    }
});

/* POST registrar juez to evento in categoria */
router.post('/:id/eventos/:idEvento/jueces', (req, res) => {
    const { id, idEvento } = req.params;
    const juez: Juez = req.body;
    try {
        const idInt = parseInt(id);
        const idEventoInt = parseInt(idEvento);
        const nuevoJuez = CategoriaController.registrarJuez(idInt, idEventoInt, juez);
        if (nuevoJuez) {
            res.status(201).json(nuevoJuez);
        } else {
            res.status(400).json({ message: `Failed to register juez. Evento '${idEvento}' or Categoria '${id}' not found.` });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal Server Error', details: `Failed to register juez for evento '${idEvento}' in categoria '${id}' data.` });
    }
});

/* DELETE juez by id from evento in categoria */
router.delete('/:id/eventos/:idEvento/jueces/:idJuez', (req, res) => {
    const { id, idEvento, idJuez } = req.params;
    try {
        const idInt = parseInt(id);
        const idEventoInt = parseInt(idEvento);
        const idJuezInt = parseInt(idJuez);
        const eliminado = CategoriaController.eliminarJuez(idInt, idEventoInt, idJuezInt);
        if (eliminado) {
            res.status(200).json({ message: 'Juez eliminado correctamente' });
        } else {
            res.status(404).json({ message: `Juez '${idJuez}' not found in evento '${idEvento}' of categoria '${id}'.` });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal Server Error', details: `Failed to delete juez '${idJuez}' for evento '${idEvento}' in categoria '${id}' data.` });
    }
});

export default router;


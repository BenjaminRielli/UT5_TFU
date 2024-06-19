import express from 'express';
import AtletaController from '../controllers/atletaController';
import { Atleta } from '../models/atleta';
import { Disciplina } from '../models/disciplina';
import DisciplinaController from '../controllers/disciplinaController';
import { Categoria } from '../models/categoria';
import CategoriaController from '../controllers/categoriaController';


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

/* GET categorias by id */
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

export default router;
import express from 'express';
import AtletaController from '../controllers/atletaController';
import { Atleta } from '../models/atleta';


const router = express.Router();

/* GET all Atletas. */
router.get('/', (req, res) => {
    try {
        const atletas: Atleta[] = AtletaController.get();
        res.status(200)
            .json(atletas);
    } catch (error) {
        res.status(500)
            .json({ success: false, message: 'Internal Server Error', details: 'Failed to retrieve atletas data.' });
    }
});

/* GET atleta by id */
router.get('/:id', (req, res) => {
    const { id } = req.params;
    try {
        const atleta = AtletaController.getById(id);
        if (!atleta) {
            res.status(404).json({ message: `atleta '${id}' not found.` });
        } else {
            res.status(200).json(atleta);
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal Server Error', details: `Failed to retrieve atleta '${id}' data.` });
    }
});


export default router;
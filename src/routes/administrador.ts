import express from 'express';
import AdministradorController from '../controllers/administradorController';
import { Administrador } from '../models/administrador';

const router = express.Router();

/* GET todos los administradores. */
router.get('/', (req, res) => {
    try {
        const admins: Administrador[] = AdministradorController.get();
        res.status(200)
            .json(admins);
    } catch (error) {
        res.status(500)
            .json({ success: false, message: 'Internal Server Error', details: 'Failed to retrieve admins data.' });
    }
});

/* GET admin by id */
router.get('/:id', (req, res) => {
    const { id } = req.params;
    try {
        const admin = AdministradorController.getById(id);
        if (!admin) {
            res.status(404).json({ message: `admin '${id}' not found.` });
        } else {
            res.status(200).json(admin);
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal Server Error', details: `Failed to retrieve admin '${id}' data.` });
    }
});


export default router;
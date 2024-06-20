import express from 'express';
import UsuarioController from '../controllers/usuarioController';
import { Usuario } from '../models/usuario';


const router = express.Router();

router.post('/', (req, res) => {
    try {        
        const { id, nombre, apellido, email, telefono, contraseña } = req.body;        
        const user: Usuario | null = UsuarioController.add(id, nombre, apellido, email, telefono, contraseña);
        res.status(200)
            .json(user);
    } catch (error) {
        res.status(500)
            .json({ success: false, message: 'Internal Server Error' });
    }
});

export default router;
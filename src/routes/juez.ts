import express from 'express';
import EventoController from '../controllers/eventoController';


const router = express.Router();

/* POST calificar a un participante. */
router.post('/', (req, res) => {
    try {

        var { idDisciplina, idCategoria, idEvento, idParticipante, idJuez, datos, tipoResultado } = req.body;

        if (!EventoController.calificar(idDisciplina, idCategoria, idEvento, idParticipante, idJuez, datos, tipoResultado)) {
            throw new Error("Hubo un error a la hora de calificar")
        }

        return res.status(200).json({ success: true, message: 'Success', details: 'Se califico correctamente' })
    } catch (error) {
        res.status(500)
            .json({ success: false, message: 'Internal Server Error', details: 'Failed to retrieve atletas data.' });
    }
});



export default router;
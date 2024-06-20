import express, { Request, Response } from 'express';
import { SancionesAtletasController } from '../controllers/sancionesController';
import { SancionesEquiposController } from '../controllers/sancionesController';

const router = express.Router();

// Rutas para sanciones de atletas
router.post('/atletas/:idAtleta/sanciones', (req: Request, res: Response) => {
    const { id, descripcion, gravedad, fechaInicio, fechaFin } = req.body;
    const { idAtleta } = req.params;

    SancionesAtletasController.add(id, descripcion, gravedad, new Date(fechaInicio), new Date(fechaFin), idAtleta);
    res.status(201).send('Sanción agregada a atleta');
});

router.delete('/atletas/:idAtleta/sanciones/:idSancion', (req: Request, res: Response) => {
    const { idAtleta, idSancion } = req.params;

    const eliminado = SancionesAtletasController.eliminarSancion(idAtleta, idSancion);
    if (eliminado) {
        res.status(200).send('Sanción eliminada de atleta');
    } else {
        res.status(404).send('Sanción o atleta no encontrado');
    }
});

router.put('/atletas/:idAtleta/sanciones/:idSancion', (req: Request, res: Response) => {
    const { descripcion, gravedad, fechaInicio, fechaFin } = req.body;
    const { idAtleta, idSancion } = req.params;

    const modificado = SancionesAtletasController.modificarSancion(idAtleta, idSancion, descripcion, gravedad, new Date(fechaInicio), new Date(fechaFin));
    if (modificado) {
        res.status(200).send('Sanción modificada para atleta');
    } else {
        res.status(404).send('Sanción o atleta no encontrado');
    }
});

// Rutas para sanciones de equipos
router.post('/equipos/:idEquipo/sanciones', (req: Request, res: Response) => {
    const { id, descripcion, gravedad, fechaInicio, fechaFin } = req.body;
    const { idEquipo } = req.params;

    SancionesEquiposController.add(id, descripcion, gravedad, new Date(fechaInicio), new Date(fechaFin), idEquipo);
    res.status(201).send('Sanción agregada a equipo');
});

router.delete('/equipos/:idEquipo/sanciones/:idSancion', (req: Request, res: Response) => {
    const { idEquipo, idSancion } = req.params;

    const eliminado = SancionesEquiposController.eliminarSancion(idEquipo, idSancion);
    if (eliminado) {
        res.status(200).send('Sanción eliminada de equipo');
    } else {
        res.status(404).send('Sanción o equipo no encontrado');
    }
});

router.put('/equipos/:idEquipo/sanciones/:idSancion', (req: Request, res: Response) => {
    const { descripcion, gravedad, fechaInicio, fechaFin } = req.body;
    const { idEquipo, idSancion } = req.params;

    const modificado = SancionesEquiposController.modificarSancion(idEquipo, idSancion, descripcion, gravedad, new Date(fechaInicio), new Date(fechaFin));
    if (modificado) {
        res.status(200).send('Sanción modificada para equipo');
    } else {
        res.status(404).send('Sanción o equipo no encontrado');
    }
});

export default router;

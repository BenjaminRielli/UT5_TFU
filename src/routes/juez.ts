import express from 'express';
import JuezController from '../controllers/juezController';
import { Atleta } from '../models/atleta';


const router = express.Router();

/* POST calificar a un atleta. */
router.post('/', (req, res) => {
    try {

        var {idDisciplina, idCategoria, idAtleta, datos} = req.body;

        if(!Number.isInteger(Number.parseInt(idDisciplina)) || !Number.isInteger(Number.parseInt(idCategoria)) || idAtleta == undefined || datos == undefined || datos.length == 0){
            
            // Los datos enviados son incorrrectos, por ende revotamos las solicitud. 
            return res.status(500).json({ success: false, message: 'Data format are invalid or enough data', details: 'Check the manual and retry' }); 
        }

      
      
      
        res.status(200)
            .json(atletas);
    } catch (error) {
        res.status(500)
            .json({ success: false, message: 'Internal Server Error', details: 'Failed to retrieve atletas data.' });
    }
});



export default router;
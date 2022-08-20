import { Router } from 'express';
import { crearComentarios, obtenerComentarioIndividual, obtenerComentarios, deleteComentario } from '../controllers/comentarios';

const router = Router();

/* router.get('/', obtenerLikes ) //[ validarJwt ],

router.get('/:id/fallecidos', obtenerFallecidosSepultura)
router.put('/:id', crearSepultura ) //[ validarJwt ],
router.delete('/:id', deleteSepultura ) //[ validarJwt ],
router.get('/:id', obtenerSepultura ) //[ validarJwt ],
 */

router.get('/', obtenerComentarios)

router.get('/:fallecidoId', obtenerComentarioIndividual)

router.post('/', crearComentarios ) //[ validarJwt ],

router.delete('/:id', deleteComentario)

export default router;
import { Router } from 'express';
import { actualizarSepultura, crearSepultura, deleteSepultura, obtenerFallecidosSepultura, obtenerSepultura, obtenerSepulturas } from '../controllers/sepulturas';


const router = Router();

router.get('/', obtenerSepulturas ) //[ validarJwt ],

router.get('/:id/fallecidos', obtenerFallecidosSepultura)
router.put('/:id', actualizarSepultura ) //[ validarJwt ],
router.post('/', crearSepultura ) //[ validarJwt ],

router.delete('/:id', deleteSepultura ) //[ validarJwt ],
router.get('/:id', obtenerSepultura ) //[ validarJwt ],


export default router;
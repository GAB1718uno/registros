import { Router } from "express";
import { actualizarFuturos, crearFuturos, obtenerFuturos } from "../controllers/futuros";

const router = Router();

router.get('/', obtenerFuturos);
router.put('/:id', actualizarFuturos);
router.post('/', crearFuturos);

export default router;
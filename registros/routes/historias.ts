import { Router } from "express";
import { crearHistoriaCloudinary } from "../controllers/historias";

const router = Router();

router.post('/', crearHistoriaCloudinary )

export default router
import { Router } from "express";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validarCampos";
import {
  deleteFallecido,
  getFallecido,
  getFallecidos,
  postFallecidos,
  putFallecido,
  obtenerRelacionado,
  getFallecidosCriba,
  crearFallecidoCloudinary,
  actualizarFallecidoCloudinary,
  getFallecidosTodos,
} from "../controllers/fallecidos";
import { validarJwt } from "../middlewares/validarJWT";
import { tiposPermitidos } from "../helpers/tiposPermitidos";
import { validarArchivoExiste } from "../middlewares/validarArchivoExiste";

const router = Router();

router.get("/busqueda/:tipo/:termino", getFallecidosCriba);

//Con limit y paginanción
router.get("/:id/:sepult/:sepulturaId", obtenerRelacionado);
router.get("/:pageSize/:page", getFallecidos);

//Original sin limit ni paginación
router.get("/", getFallecidos);
router.get("/todos", getFallecidosTodos);

router.get("/:id", getFallecido);
/* router.put('/:id',
[
    check('name', 'El nombre del fallecido es obligatorio').not().isEmpty(),
    check('apellidos', 'El apellido es obligatorio').not().isEmpty(),
    validarCampos,
] , putFallecido); */
router.put(
  "/:tipo/:id",
  [
    validarJwt,
    validarArchivoExiste,
    check("tipo").custom((t) =>
      tiposPermitidos(t, ["usuarios", "fallecidos", "Sepulturas", "sepulturas"])
    ),
    validarCampos,
  ],
  actualizarFallecidoCloudinary
);
router.post(
  "/",
  [
    validarJwt,
    validarArchivoExiste,
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("apellidos", "El apellido es obligatorio").not().isEmpty(),
    validarCampos,
  ],
  crearFallecidoCloudinary
);
/* router.post('/',
[
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('apellidos', 'El apellido es obligatorio').not().isEmpty(),
    validarCampos
] , postFallecidos); */

router.delete("/:id", deleteFallecido);

export default router;

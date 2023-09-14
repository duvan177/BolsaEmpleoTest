
import { Router } from "express";
import { aplicacionesController } from "../controllers";
const router = Router();
router.post('/aplicaciones', aplicacionesController.crearAplicacion);
router.get('/aplicaciones/:ciudadanoCedula/:vacanteID', aplicacionesController.obtenerAplicacion);
router.get('/aplicaciones', aplicacionesController.obtenerTodasLasAplicaciones);
router.delete('/aplicaciones/:ciudadanoCedula/:vacanteID', aplicacionesController.eliminarAplicacion);
export default router;
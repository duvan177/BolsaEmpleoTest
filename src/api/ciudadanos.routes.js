
import { Router } from "express";
import { ciudadanosController } from "../controllers";
const router = Router();
router.post('/ciudadanos', ciudadanosController.crearCiudadano);
router.get('/ciudadanos/:cedula', ciudadanosController.obtenerCiudadanoPorCedula);
router.get('/ciudadanos', ciudadanosController.obtenerTodosLosCiudadanos);
router.put('/ciudadanos/:cedula', ciudadanosController.actualizarCiudadano);
router.delete('/ciudadanos/:cedula', ciudadanosController.eliminarCiudadano);

export default router;

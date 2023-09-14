

import { Router } from "express";
import { vacantesController } from "../controllers";
const router = Router();
router.post('/vacantes', vacantesController.crearVacante);
router.get('/vacantes/:IDVacante', vacantesController.obtenerVacantePorID);
router.get('/vacantes', vacantesController.obtenerTodasLasVacantes);
router.put('/vacantes/:IDVacante', vacantesController.actualizarVacante);
router.delete('/vacantes/:IDVacante', vacantesController.eliminarVacante);

export default router;

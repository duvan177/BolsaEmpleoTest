
import * as Model from "../models";
class VacantesController {
   async crearVacante(req, res) {
    try {
      const nuevaVacante = await Model.Vacante.createVacante(req.body);
      res.status(201).json(nuevaVacante);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

   async obtenerVacantePorID(req, res) {
    const { IDVacante } = req.params;
    try {
      const vacante = await Model.Vacante.getVacanteByID(IDVacante);
      if (!vacante) {
        return res.status(404).json({ error: 'Vacante no encontrada' });
      }
      res.json(vacante);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

   async obtenerTodasLasVacantes(req, res) {
    try {
      const vacantes = await Model.Vacante.getAllVacantes();
      res.json(vacantes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

   async actualizarVacante(req, res) {
    const { IDVacante } = req.params;
    const datosActualizados = req.body;
    try {
      const vacanteActualizada = await Model.Vacante.updateVacante(IDVacante, datosActualizados);
      res.json(vacanteActualizada);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

   async eliminarVacante(req, res) {
    const { IDVacante } = req.params;
    try {
      await Model.Vacante.deleteVacante(IDVacante);
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  
}

export default new VacantesController();

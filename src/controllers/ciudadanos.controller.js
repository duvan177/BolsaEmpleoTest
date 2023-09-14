
import * as Model from '../models'
class CiudadanosController {
   async crearCiudadano(req, res) {
    try {
      const nuevoCiudadano = await Model.Ciudadano.createCiudadano(req.body);
      res.status(201).json(nuevoCiudadano);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

   async obtenerCiudadanoPorCedula(req, res) {
    const { cedula } = req.params;
    try {
      const ciudadano = await Model.Ciudadano.getCiudadanoByCedula(cedula);
      if (!ciudadano) {
        return res.status(404).json({ error: 'Ciudadano no encontrado' });
      }
      res.json(ciudadano);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

   async obtenerTodosLosCiudadanos(req, res) {
    try {
      const ciudadanos = await Model.Ciudadano.getAllCiudadanos();
      res.json(ciudadanos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

   async actualizarCiudadano(req, res) {
    const { cedula } = req.params;
    const datosActualizados = req.body;
    try {
      const ciudadanoActualizado = await Model.Ciudadano.updateCiudadano(cedula, datosActualizados);
      res.json(ciudadanoActualizado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

   async eliminarCiudadano(req, res) {
    const { cedula } = req.params;
    try {
      await Model.Ciudadano.deleteCiudadano(cedula);
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new  CiudadanosController();

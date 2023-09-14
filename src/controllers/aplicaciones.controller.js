import * as Model from "../models";
class AplicacionesController {
  async crearAplicacion(req, res) {
    try {
      const nuevaAplicacion = await Model.Aplicacion.createAplicacion(req.body);
      res.status(201).json(nuevaAplicacion);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async obtenerAplicacion(req, res) {
    const { ciudadanoCedula, vacanteID } = req.params;
    try {
      const aplicacion = await Model.Aplicacion.getAplicacion(
        ciudadanoCedula,
        parseInt(vacanteID, 10)
      );
      if (!aplicacion) {
        return res.status(404).json({ error: "Aplicación no encontrada" });
      }
      res.json(aplicacion);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async obtenerTodasLasAplicaciones(req, res) {
    try {
      const aplicaciones = await Model.Aplicacion.getAllAplicaciones();
      res.json(aplicaciones);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async eliminarAplicacion(req, res) {
    const { ciudadanoCedula, vacanteID } = req.params;
    try {
      await Model.Aplicacion.deleteAplicacion(
        ciudadanoCedula,
        parseInt(vacanteID, 10)
      );
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
export default new AplicacionesController();

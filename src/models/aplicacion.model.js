import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class Aplicacion {
  static async createAplicacion(aplicacionData) {
    return prisma.aplicaciones.create({
      data: aplicacionData,
    });
  }

  static async getAplicacion(ciudadanoCedula, vacanteID) {
    return prisma.aplicaciones.findUnique({
      where: {
        IDCiudadano_IDVacante: {
          IDCiudadano: ciudadanoCedula,
          IDVacante: vacanteID,
        },
      },
    });
  }

  static async getAllAplicaciones() {
    return prisma.aplicaciones.findMany();
  }

  static async deleteAplicacion(ciudadanoCedula, vacanteID) {
    return prisma.aplicaciones.delete({
      where: {
        ciudadanoCedula_vacanteID: {
          ciudadanoCedula,
          vacanteID,
        },
      },
    });
  }
}

export default Aplicacion;

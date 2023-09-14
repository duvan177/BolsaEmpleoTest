import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class Ciudadano {
  static async createCiudadano(ciudadanoData) {
    return prisma.ciudadanos.create({
      data: {...ciudadanoData , FechaNacimiento: new Date(ciudadanoData.FechaNacimiento)},
    });
  }

  static async getCiudadanoByCedula(cedula) {
    return prisma.ciudadanos.findUnique({
      where: {
        Cedula: cedula,
      },
    });
  }

  static async getAllCiudadanos() {
    return prisma.ciudadanos.findMany();
  }

  static async updateCiudadano(cedula, updatedData) {
    return prisma.ciudadanos.update({
      where: {
        Cedula: cedula,
      },
      data: updatedData,
    });
  }

  static async deleteCiudadano(cedula) {
    return prisma.ciudadanos.delete({
      where: {
        Cedula: cedula,
      },
    });
  }
}

export default Ciudadano;
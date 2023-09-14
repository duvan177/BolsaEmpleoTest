import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();
class Vacantes {
  constructor() {}
  static async createVacante(vacanteData) {
    return prisma.vacantes.create({
      data: vacanteData,
    });
  }

  static async getVacanteByID(Codigo) {
    return prisma.vacantes.findUnique({
      where: {
        Codigo,
      },
    });
  }

  static async getAllVacantes() {
    return prisma.vacantes.findMany();
  }

  static async updateVacante(Codigo, updatedData) {
    return prisma.vacantes.update({
      where: {
        Codigo,
      },
      data: updatedData,
    });
  }

  static async deleteVacante(IDVacante) {
    return prisma.vacantes.delete({
      where: {
        Codigo: IDVacante,
      },
    });
  }
}
export default Vacantes;

import prismaClient from "../../prisma";

interface HairCutRequest {
  user_id: string;
  haircut_id: string;
  name: string;
  price: number;
  status: boolean | string;
}

class UpdateHairCutService {
  async execute({
    user_id,
    haircut_id,
    name,
    price,
    status = true,
  }: HairCutRequest) {
    // Buscar a subscription do user logado
    const user = await prismaClient.user.findFirst({
      where: {
        id: user_id,
      },
      include: {
        subscriptions: true,
      },
    });
    if (user?.subscriptions?.status != "active") {
      throw new Error("Not Authorized!");
    }

    const hairCut = await prismaClient.haircut.update({
      where: {
        id: haircut_id,
      },
      data: {
        name: name,
        price: price,
        status: status === true ? true : false,
      },
    });
    return hairCut;
  }
}

export { UpdateHairCutService };

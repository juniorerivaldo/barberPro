import prismaClient from "../../prisma";

interface HairCutRequest {
  user_id: string;
  name: string;
  price: number;
}

class CreateHairCutService {
  async execute({ user_id, name, price }: HairCutRequest) {
    if (!name || !price) {
      throw new Error("Invalid");
    }
    // verificar quantos modelos o user já tem cadastrado
    const myHaircuts = await prismaClient.haircut.count({
      where: {
        user_id: user_id,
      },
    });

    const user = await prismaClient.user.findFirst({
      where: {
        id: user_id,
      },
      include: {
        subscriptions: true,
      },
    });

    // verificar se é premium senão limitar a quantidade para cadastrar
    if (myHaircuts >= 3 && user?.subscriptions?.status !== "active") {
      throw new Error("Not Authorized!");
    }

    const hairCut = await prismaClient.haircut.create({
      data: {
        name: name,
        price: price,
        user_id: user_id,
      },
    });
    return hairCut;
  }
}

export { CreateHairCutService };

import prismaClient from "../../prisma";

interface HairCutRequest {
  user_id: string;
  status: boolean | string;
}

class ListHairCutService {
  async execute({ user_id, status }: HairCutRequest) {
    const haircuts = await prismaClient.haircut.findMany({
      where: {
        user_id: user_id,
        status: status === "true" ? true : false,
      },
    });

    return haircuts;
  }
}

export { ListHairCutService };

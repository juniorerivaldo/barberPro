import prismaClient from "../../prisma/index";
import { hash } from "bcryptjs";

interface UserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ name, email, password }: UserRequest) {
    if (!email || email === "") {
      throw new Error("Email is incorrect!");
    }

    const userAlreadyExists = await prismaClient.user.findFirst({
      where: { email: email },
    });

    if (userAlreadyExists) {
      throw new Error("Email already exists");
    }

    // encriptando a senha antes de enviar ao banco de dados
    const passwordHash = await hash(password, 8);

    const user = await prismaClient.user.create({
      data: {
        name: name,
        email: email,
        password: passwordHash,
      },
      select: {
        // aqui você pode escolher o que deseja retornar ao usuario quando criar sua conta
        id: true,
        name: true,
        email: true,
      },
    });

    return user;
  }
}

export { CreateUserService };

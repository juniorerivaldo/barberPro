import prismaClient from "../../prisma/index";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface AuthUserRequest {
  email: string;
  password: string;
}
class AuthUserService {
  async execute({ email, password }: AuthUserRequest) {
    const user = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
      include: {
        subscriptions: true,
      },
    });
    if (!user) {
      throw new Error("Email/password incorreto");
    }
    // verificar a senha se esta correta
    const passwordMatch = await compare(password, user?.password); // o  serve para se não existir a propriedade o js não dar erro e retornar vazio

    if (!passwordMatch) {
      throw new Error("Email/password incorreto");
    }

    // gerar um token JWT -- precisa desabilitar o strict no tsconfig
    const token = sign(
      {
        name: user.name,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: process.env.JWT_EXPIRED_TIME,
      }
    );

    return {
      id: user?.id,
      name: user?.name,
      email: user?.email,
      endereco: user?.endereco,
      token: token,
      subscriptions: user.subscriptions
        ? {
            id: user?.subscriptions?.id,
            status: user?.subscriptions?.status,
          }
        : null, // se não tiver subscriptions retorna null
    };
  }
}

export { AuthUserService };

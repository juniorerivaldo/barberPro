import { Request, Response } from "express";
import { UpdateUserService } from "../../services/user/updateUserService";

class UpdateUserController {
  async handle(request: Request, response: Response) {
    const { name, endereco } = request.body;
    const user_id = request.user_id;

    const updateUser = new UpdateUserService();
    const user = await updateUser.execute({ user_id, name, endereco });
    return response.json(user); // retorna para o front-end
  }
}

export { UpdateUserController };

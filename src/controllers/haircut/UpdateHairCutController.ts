import { Request, Response } from "express";
import { UpdateHairCutService } from "../../services/haircut/UpdateHairCutService";

class UpdateHairCutController {
  async handle(request: Request, response: Response) {
    const { haircut_id, name, price, status } = request.body;
    const user_id = request.user_id;
    const updateHairCutService = new UpdateHairCutService();
    const hairCut = await updateHairCutService.execute({
      haircut_id,
      name,
      price,
      status,
      user_id,
    });
    return response.json(hairCut);
  }
}

export { UpdateHairCutController };

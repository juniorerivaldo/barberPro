import { Request, Response } from "express";
import { DetailHairCutService } from "../../services/haircut/DetailHairCutService";

class DetailHairCutController {
  async handle(request: Request, response: Response) {
    const haircut_id = request.query.haircut_id as string;
    const detailHairCutService = new DetailHairCutService();
    const haircut = await detailHairCutService.execute({ haircut_id });
    return response.json(haircut);
  }
}

export { DetailHairCutController };

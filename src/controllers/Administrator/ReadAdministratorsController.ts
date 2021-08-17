import { Request, Response } from "express";
import { ReadAdministratorsService } from "../../services/Administrator/ReadAdministratorsService";

class ReadAdministratorsController {
  async handle(request: Request, response: Response) {
    const readAdministratorsService = new ReadAdministratorsService();

    const administrators = await readAdministratorsService.execute();

    return response.json(administrators);
  }
}

export { ReadAdministratorsController };
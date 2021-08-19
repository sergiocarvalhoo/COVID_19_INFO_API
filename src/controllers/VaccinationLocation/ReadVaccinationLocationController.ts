import { Request, Response } from "express";
import {  ReadVaccinationLocationService } from "../../services/VaccinationLocation/ReadVaccinationLocationService";

class ReadVaccinationLocationController {
  async handle(request: Request, response: Response) {
    const readVaccinationLocationService = new ReadVaccinationLocationService();

    const vaccinationLocation = await readVaccinationLocationService.execute();

    return response.json(vaccinationLocation);
  }
}

export { ReadVaccinationLocationController };
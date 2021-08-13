import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UpdateVaccinationLocationTypeService } from "../../dto/VaccinationLocation/UpdateVaccinationLocationTypeService";
import { RepositoryAdministrators } from "../../repositories/RepositoryAdministrators";
import { UpdateVaccinationLocationService } from "../../services/VaccinationLocation/UpdateVaccinationLocationService";


class UpdateVaccinationLocationController {

    async handle(request: Request, response: Response) {
        const { id, name, description, latitude, longitude, author } = request.body as UpdateVaccinationLocationTypeService;

        const administratorRepository = getCustomRepository(RepositoryAdministrators);

        const adm = await administratorRepository.findByRegistration(request.administrator_registration);

        const updateVaccinationLocationService = new UpdateVaccinationLocationService();

        const location = await updateVaccinationLocationService.execute({
            id,
            name,
            description,
            latitude,
            longitude,
            author: adm
        });

        return response.status(200).json(location);
    }

}

export { UpdateVaccinationLocationController }

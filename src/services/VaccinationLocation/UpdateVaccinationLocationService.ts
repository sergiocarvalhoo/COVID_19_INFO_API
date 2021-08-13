import { getCustomRepository } from "typeorm";
import { AppErrors } from '../../errors/AppErrors';
import { VaccinationLocation } from "../../models/VaccinationLocation";
import { UpdateVaccinationLocationTypeService } from "../../dto/VaccinationLocation/UpdateVaccinationLocationTypeService";
import { RepositoryVaccinationLocation } from "../../repositories/RepositoryVaccinationLocation";
import { updateVaccinationLocationValidation } from "../../utils/VaccinationLocation/UpdateVaccinationLocationValidation";


class UpdateVaccinationLocationService {

    async execute(vaccinationLocationParams: UpdateVaccinationLocationTypeService): Promise<VaccinationLocation> {

        const vaccinationLocationRepository = getCustomRepository(RepositoryVaccinationLocation);

        await updateVaccinationLocationValidation(vaccinationLocationParams);

        const location = await vaccinationLocationRepository.findById(vaccinationLocationParams.id);

        if (!location) {
            throw new AppErrors('location not Found !', 404);
        }

        location.name = vaccinationLocationParams.name;
        location.description = vaccinationLocationParams.description;
        location.latitude = vaccinationLocationParams.latitude;
        location.longitude = vaccinationLocationParams.longitude;
        location.author = vaccinationLocationParams.author


        return await vaccinationLocationRepository.createVaccinationLocation(location)
    }
}

export { UpdateVaccinationLocationService }

import { getCustomRepository } from "typeorm";
import { RepositoryVaccinationLocation } from '../../repositories/RepositoryVaccinationLocation';
import { DeleteVaccinationLocationType } from '../../dto/VaccinationLocation/DeleteVaccinationLocationType';
import { deleteVaccinationLocationValidation } from "../../utils/VaccinationLocation/DeleteVaccinationLocationValidation";
import { AppErrors } from '../../errors/AppErrors';


class DeleteVaccinationLocationService {

    async execute(vaccinationLocationParams: DeleteVaccinationLocationType) {

        const vaccinationLocationRepository = getCustomRepository(RepositoryVaccinationLocation);

        await deleteVaccinationLocationValidation(vaccinationLocationParams);

        const location = await vaccinationLocationRepository.findById(vaccinationLocationParams.id);

        if (!location) {
            throw new AppErrors('No have any location registered with this ID !', 400);
        }

        if (location) {
            await vaccinationLocationRepository.delete(location.id)
        }

    }
}

export { DeleteVaccinationLocationService }

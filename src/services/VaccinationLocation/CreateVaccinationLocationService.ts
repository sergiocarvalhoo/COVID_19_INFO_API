




import { getCustomRepository } from "typeorm";	
import { RepositoryVaccinationLocation } from '../../repositories/RepositoryVaccinationLocation';
import { VaccinationLocation } from '../../models/VaccinationLocation'
import { VaccinationLocationTypeService } from '../../dto/VaccinationLocation/VaccinationLocationTypeService'
import { CreateVaccinationLocationValidation } from "../../utils/VaccinationLocation/CreateVaccinationLocationValidation";
import { AppErrors } from '../../errors/AppErrors';


class CreateVaccinationLocationService {
    
    async execute(vaccinationLocationParams:VaccinationLocationTypeService): Promise<VaccinationLocation>{

        const vaccinationLocationRepository = getCustomRepository(RepositoryVaccinationLocation);

        await CreateVaccinationLocationValidation(vaccinationLocationParams);


        const location = await vaccinationLocationRepository.createVaccinationLocation({
            name: vaccinationLocationParams.name,
            description: vaccinationLocationParams.description,
            latitude: vaccinationLocationParams.latitude,
            longitude: vaccinationLocationParams.longitude,
            author:vaccinationLocationParams.author
        });

        return location;
    }
}

export {CreateVaccinationLocationService}

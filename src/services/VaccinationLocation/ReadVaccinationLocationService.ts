import { getCustomRepository } from "typeorm";
import { RepositoryVaccinationLocation } from "../../repositories/RepositoryVaccinationLocation";
import { classToPlain } from "class-transformer";

class ReadVaccinationLocationService {
  async execute() {
    const VaccinationLocationRepository = getCustomRepository(RepositoryVaccinationLocation);

    const vaccinationLocation = await VaccinationLocationRepository.find();

    return classToPlain(vaccinationLocation);
  }
}

export { ReadVaccinationLocationService };
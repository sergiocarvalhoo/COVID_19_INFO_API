import { EntityRepository, Repository } from "typeorm";
import { VaccinationLocation } from '../models/VaccinationLocation';
import { VaccinationLocationTypeService } from '../dto/VaccinationLocation/VaccinationLocationTypeService'


@EntityRepository(VaccinationLocation)
class RepositoryVaccinationLocation extends Repository<VaccinationLocation>{

    async findByName(name: string): Promise<VaccinationLocation | undefined> {
        return await this.findOne({ name })
    }

    async findById(id: number): Promise<VaccinationLocation | undefined> {
        return await this.findOne({ id })
    }

    async createVaccinationLocation(vaccinationLocationParam: VaccinationLocationTypeService): Promise<VaccinationLocation> {

        const vaccinationLocation = this.create(vaccinationLocationParam);
        await this.save(vaccinationLocation);

        return vaccinationLocation;
    }

}

export { RepositoryVaccinationLocation }

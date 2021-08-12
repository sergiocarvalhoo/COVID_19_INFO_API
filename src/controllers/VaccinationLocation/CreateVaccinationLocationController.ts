


import { Request, Response } from "express";
import { CreateVaccinationLocationService } from '../../services/VaccinationLocation/CreateVaccinationLocationService'
import { VaccinationLocationType } from '../../dto/VaccinationLocation/VaccinationLocationType'
import { getCustomRepository } from "typeorm";	
import { RepositoryAdministrators } from '../../repositories/RepositoryAdministrators'


class CreateVaccinationLocationController{

    async handle(request:Request, response:Response){
        const {name,description,latitude,longitude} = request.body as VaccinationLocationType;
        
        const administratorRepository = getCustomRepository(RepositoryAdministrators);

        const author = await administratorRepository.findByRegistration(request.administrator_registration);

        const createVaccinationLocationService = new CreateVaccinationLocationService();

        const location = await createVaccinationLocationService.execute({
            name,description,latitude,longitude, author
        });

        return response.status(201).json(location);
    }

}

export {CreateVaccinationLocationController}

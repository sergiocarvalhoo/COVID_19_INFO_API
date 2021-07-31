import { getCustomRepository } from "typeorm";	
import { RepositoryAdministrators } from '../repositories/RepositoryAdministrators';
import { Administrator } from '../models/Administrator'
import { AdministratorsType } from '../dto/AdministratorsType'
import { createAdministratorValidation } from "../utils/CreateAdministratorValidation";
import { AppErrors } from '../errors/AppErrors';
import { hash } from 'bcryptjs';


class CreateAdministratorService {
    
    async execute(administratorParams:AdministratorsType): Promise<Administrator>{

        const administratorsRepository = getCustomRepository(RepositoryAdministrators);

        await createAdministratorValidation(administratorParams);

        const administratorCPFExists = await administratorsRepository.findByCPF(administratorParams.cpf);
        const administratorEmailExists = await administratorsRepository.findByEmail(administratorParams.email);
        const administratorRegistrationExists = await administratorsRepository.findByRegistration(administratorParams.registration);

        if(administratorCPFExists){
            throw new AppErrors('There is already an administrator registered with this CPF number! !', 400);
        }

        if(administratorEmailExists){
            throw new AppErrors('There is already an administrator registered with this E-mail !', 400);
        }

        if(administratorRegistrationExists){
            throw new AppErrors('There is already an administrator registered with this Registration number !', 400);
        }

        const passwordCrypt = await hash(administratorParams.password, 8);

        const administrator = await administratorsRepository.createAdministrator({
            name: administratorParams.name,
            registration: administratorParams.registration, 
            cpf: administratorParams.cpf, 
            birth_date: administratorParams.birth_date, 
            password: passwordCrypt, 
            email: administratorParams.email, 
            occupation: administratorParams.occupation
        });

        return administrator;
    }
}

export {CreateAdministratorService}

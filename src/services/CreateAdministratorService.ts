import { getCustomRepository } from "typeorm";	
import { RepositoryAdministrators } from '../repositories/RepositoryAdministrators';
import { Administrator } from '../entities/Administrator'
import { AdministratorsType } from '../dataio/AdministratorsType'
import { AppErrors } from '../errors/AppErrors';
import { hash } from 'bcryptjs';

class CreateAdministratorService {
    
    async execute({name, registration, cpf, birth_date, password, email, occupation}:AdministratorsType): Promise<Administrator>{

        const administratorsRepository = getCustomRepository(RepositoryAdministrators);

        if(!cpf){
            throw new AppErrors('The administrators CPF number is invalid !', 400);
        }

        if(!email){
            throw new AppErrors('The administrators E-mail is invalid !', 400);
        }

        if(!registration){
            throw new AppErrors('The administrators Registration is invalid !', 400);
        }

        const administratorCPFExists = await administratorsRepository.findByCPF(cpf);
        const administratorEmailExists = await administratorsRepository.findByEmail(email);
        const administratorRegistrationExists = await administratorsRepository.findByRegistration(registration);

        if(administratorCPFExists){
            throw new AppErrors('There is already an administrator registered with this CPF number! !', 400);
        }

        if(administratorEmailExists){
            throw new AppErrors('There is already an administrator registered with this E-mail !', 400);
        }

        if(administratorRegistrationExists){
            throw new AppErrors('There is already an administrator registered with this Registration number !', 400);
        }

        const passwordCrypt = await hash(password, 8);

        const administrator = await administratorsRepository.createAdministrator({
            name,
            registration, 
            cpf, 
            birth_date, 
            password: passwordCrypt, 
            email, 
            occupation
        });

        return administrator;
    }
}

export {CreateAdministratorService}
import { getCustomRepository } from "typeorm";	
import { RepositoryAdministrators } from '../repositories/RepositoryAdministrators';
import { Administrator } from '../entities/Administrator'
import { AppErrors } from '../errors/AppErrors';
import { hash } from 'bcryptjs';

export type AdministratorsType = {
    name:string;
    registration:string;
    cpf:string;
    birth_date:Date;
    password:string;
    email:string;
    occupation:string;
}

class CreateAdministratorService {
    
    async execute({name, registration, cpf, birth_date, password, email, occupation}:AdministratorsType): Promise<Administrator>{

        const administratorsRepository = getCustomRepository(RepositoryAdministrators);

        if(!cpf){
            throw new AppErrors('CPF Invalid !', 400);
        }

        if(!email){
            throw new AppErrors('E-mail Invalid !', 400);
        }

        const administratorExists = await administratorsRepository.findByCPF(cpf);

        if(administratorExists){
            throw new AppErrors('CPF Already Exists !', 400);
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
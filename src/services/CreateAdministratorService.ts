import {getCustomRepository} from "typeorm";	
import {RepositoryAdministrators} from '../repositories/RepositoryAdministrators';


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
    
    async execute({name, registration, cpf, birth_date, password, email, occupation}:AdministratorsType){

        const administratorsRepository = getCustomRepository(RepositoryAdministrators);

        if(!cpf){
            throw new Error('CPF Invalid !');
        }

        const administratorExists = await administratorsRepository.findByCPF(cpf);
        if(administratorExists){
            throw new Error('CPF Already Exists !');
        }
        const administrator = await administratorsRepository.createAdministrator(name, registration, cpf, birth_date, password, email, occupation);
    
        return administrator;
    }
}

export {CreateAdministratorService}
import { getCustomRepository } from "typeorm";	
import { RepositoryAdministrators } from '../repositories/RepositoryAdministrators';
import { Administrator } from '../models/Administrator'
import { UpdateAdministratorsType } from '../dto/UpdateAdministratorsType'
import { AppErrors } from '../errors/AppErrors';
import { hash, compare } from 'bcryptjs';


class UpdateAdministratorService {
    
    async execute({name, registration, password, email, occupation}:UpdateAdministratorsType): Promise<Administrator>{
        
        const administratorsRepository = getCustomRepository(RepositoryAdministrators);

        const administrator = await administratorsRepository.findByRegistration(registration);

        if(!administrator){
            throw new AppErrors('Administrator not Found !', 404);
        }

        if(!name){
            throw new AppErrors('The new Name is invalid !', 400);
        }
        if(!password){
            throw new AppErrors('The new Password is invalid !', 400);
        }
        if(!email){
            throw new AppErrors('The new E-mail is invalid !', 400);
        }
        if(!occupation){
            throw new AppErrors('The new Occupation is invalid !', 400);
        }

        const old_password = administrator.password;

        const old_email = administrator.email;

        const administratorEmail = await administratorsRepository.findByEmail(email);

        const match = await compare(password, old_password);


        if (administratorEmail){
            if (administratorEmail.registration != registration && email == administratorEmail.email){
                throw new AppErrors('This Email is already in use by another Administrator, please try again with a new Email !', 400);
            }  
        }

        if (email == old_email){
            throw new AppErrors('The new Email is the same as the old one, please enter a different Email !', 400);
        }

        if (match) {
            throw new AppErrors('The new Password is the same as the old one, please enter a different password !', 400);
        }
    
        const passwordCrypt = await hash(password, 8);
    
        administrator.name = name;
        administrator.password = passwordCrypt;
        administrator.email = email;
        administrator.occupation = occupation;
    
        return await administratorsRepository.save(administrator);
    }
}

export {UpdateAdministratorService}

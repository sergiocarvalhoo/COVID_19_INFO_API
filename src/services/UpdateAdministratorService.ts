import { getCustomRepository } from "typeorm";	
import { RepositoryAdministrators } from '../repositories/RepositoryAdministrators';
import { Administrator } from '../models/Administrator'
import { UpdateAdministratorsType } from '../dto/UpdateAdministratorsType'
import { updateAdministratorValidation } from "../utils/UpdateAdministratorValidation";
import { AppErrors } from '../errors/AppErrors';
import { hash, compare } from 'bcryptjs';



class UpdateAdministratorService {
    
    async execute(administratorParams:UpdateAdministratorsType): Promise<Administrator>{
        
        const administratorsRepository = getCustomRepository(RepositoryAdministrators);

        await updateAdministratorValidation(administratorParams);

        const administrator = await administratorsRepository.findByRegistration(administratorParams.registration);

        if(!administrator){
            throw new AppErrors('Administrator not Found !', 404);
        }

        const old_password = administrator.password;

        const old_email = administrator.email;

        const administratorEmail = await administratorsRepository.findByEmail(administratorParams.email);

        const match = await compare(administratorParams.password, old_password);


        if (administratorEmail){
            if (administratorEmail.registration != administratorParams.registration && administratorParams.email == administratorEmail.email){
                throw new AppErrors('This Email is already in use by another Administrator, please try again with a new Email !', 400);
            }  
        }

        if (administratorParams.email == old_email){
            throw new AppErrors('The new Email is the same as the old one, please enter a different Email !', 400);
        }

        if (match) {
            throw new AppErrors('The new Password is the same as the old one, please enter a different password !', 400);
        }
    
        const passwordCrypt = await hash(administratorParams.password, 8);
    
        administrator.name = administratorParams.name;
        administrator.password = passwordCrypt;
        administrator.email = administratorParams.email;
        administrator.occupation = administratorParams.occupation;
    
        return await administratorsRepository.save(administrator);
    }
}

export {UpdateAdministratorService}

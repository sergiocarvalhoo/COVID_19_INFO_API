import { getCustomRepository } from "typeorm";	
import { RepositoryAdministrators } from '../repositories/RepositoryAdministrators';
import { AuthenticationType } from '../dto/AuthenticationType'
import { authenticateAdministratorValidation } from "../utils/AuthenticateAdministratorValidation";
import { AppErrors } from '../errors/AppErrors';
import { compare } from 'bcryptjs';
import { sign } from "jsonwebtoken"


class AuthenticationService {
    
    async execute(administratorParams:AuthenticationType): Promise<string>{

        const administratorsRepository = getCustomRepository(RepositoryAdministrators);

        await authenticateAdministratorValidation(administratorParams);

        // Check if there is an administrator with this email
        const administrator = await administratorsRepository.findByCPF(administratorParams.cpf);

        if(!administrator){
            throw new AppErrors("No administrator account was found registered with this CPF number!", 400);
        }

        // Check if the password is correct
        const passwordComparator = await compare(administratorParams.password, administrator.password)
        
        if(!passwordComparator){
            throw new AppErrors("The administrator password is incorrect !", 400);
        }

        // Generating the Token
        const token = sign(
            {
                email: administrator.email
            },
            process.env.TOKEN_KEY, 
            {
                expiresIn: '1h', subject:administrator.registration
            }
        );

        return token;

    }
}

export {AuthenticationService}

import { getCustomRepository } from "typeorm";	
import { RepositoryAdministrators } from '../repositories/RepositoryAdministrators';
import { AppErrors } from '../errors/AppErrors';
import { compare } from 'bcryptjs';
import { sign } from "jsonwebtoken"


export interface DataAuthentication{
    cpf:string;
    password:string;
}


class AuthenticationService {
    
    async execute({cpf, password}:DataAuthentication): Promise<string>{

        const administratorsRepository = getCustomRepository(RepositoryAdministrators);

        // Check if there is an administrator with this email
        const administrator = await administratorsRepository.findByCPF(cpf);


        if(!administrator){
            throw new AppErrors("No account was found registered with this CPF number!", 400);
        }

        // Check if the password is correct
        const passwordComparator = compare(password, administrator.password)
        
        if(!passwordComparator){
            throw new AppErrors("Password / CPF not found", 400);
        }

        // Generating the Token
        const token = sign({cpf: administrator.cpf}, "testando",{expiresIn: '1h', subject:administrator.registration}
    
        );

        return token;

    }
}

export {AuthenticationService}
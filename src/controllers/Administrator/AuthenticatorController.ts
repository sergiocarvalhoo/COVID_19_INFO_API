import { Request, Response } from "express";
import { AuthenticationService } from '../../services/Administrator/AuthenticationService';
import { AuthenticationType } from '../../dto/Administrator/AuthenticationType'


class AuthenticatorController{

    async handle(request:Request, response:Response){
        
        const {cpf, password} = request.body as AuthenticationType;
        
        const authenticationService = new AuthenticationService();

        const token = await authenticationService.execute({
            cpf, password
        });

        return response.status(200).json(token);
    }

}

export {AuthenticatorController}

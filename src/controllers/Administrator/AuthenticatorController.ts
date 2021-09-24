import { Request, Response } from "express";
import { AuthenticationService } from '../../services/Administrator/AuthenticationService';
import { AuthenticationType } from '../../dto/Administrator/AuthenticationType'


class AuthenticatorController{

    async handle(request:Request, response:Response){
        
        const {cpf, password} = request.body as AuthenticationType;
        
        const authenticationService = new AuthenticationService();

        const {administrator, token}  = await authenticationService.execute({
            cpf, password
        });


        return response.status(200).json({administrator, token});
    }

}

export {AuthenticatorController}

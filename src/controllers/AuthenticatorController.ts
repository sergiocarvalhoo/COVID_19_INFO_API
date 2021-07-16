import { Request, Response } from "express";
import { AuthenticationService, DataAuthentication } from '../services/AuthenticationService';


class AuthenticatorController{

    async handle(request:Request, response:Response){
        
        const {cpf, password} = request.body as DataAuthentication;
        
        const authenticationService = new AuthenticationService();

        const token = await authenticationService.execute({
            cpf, password
        });

        //console.log(token)

        return response.status(201).json(token);
    }

}

export {AuthenticatorController}
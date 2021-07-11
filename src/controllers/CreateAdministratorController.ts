import {Request, Response} from "express";
import {CreateAdministratorService, AdministratorsType} from '../services/CreateAdministratorService'


class CreateAdministratorController{

    async handle(request:Request, response:Response){
        const {name, registration, cpf, birth_date, password, email, occupation} = request.body as AdministratorsType;
        
        const createUserService = new CreateAdministratorService();

        const administrator = await createUserService.execute({
            name, registration, cpf, birth_date, password, email, occupation
        });

        return response.json(administrator);
    }

}

export {CreateAdministratorController}
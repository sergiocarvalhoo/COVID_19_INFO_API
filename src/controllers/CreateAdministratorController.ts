import { Request, Response } from "express";
import { CreateAdministratorService } from '../services/CreateAdministratorService'
import { AdministratorsType } from '../dto/AdministratorsType'


class CreateAdministratorController{

    async handle(request:Request, response:Response){
        const {name, registration, cpf, birth_date, password, email, occupation} = request.body as AdministratorsType;
        
        const createAdministratorService = new CreateAdministratorService();

        const administrator = await createAdministratorService.execute({
            name, registration, cpf, birth_date, password, email, occupation
        });

        return response.status(201).json(administrator);
    }

}

export {CreateAdministratorController}

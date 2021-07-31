import { Request, Response } from "express";
import { UpdateAdministratorService } from '../services/UpdateAdministratorService'
import { UpdateAdministratorsType } from '../dto/UpdateAdministratorsType'


class UpdateAdministratorController{

    async handle(request:Request, response:Response){
        const {name, registration, password, email, occupation} = request.body as UpdateAdministratorsType;
        
        const updateAdministratorService = new UpdateAdministratorService();

        const administrator = await updateAdministratorService.execute({
            name, registration, password, email, occupation
        });

        return response.status(200).json(administrator);
    }

}

export {UpdateAdministratorController}

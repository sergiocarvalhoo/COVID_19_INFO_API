import { Request, Response } from "express";
import { DeleteAdministratorService } from '../services/DeleteAdministratorService'
import { DeleteAdministratorType } from '../dataio/DeleteAdministratorsType'

class DeleteAdministratorController{

    async handle(request:Request, response:Response){
        
        const registration = request.body as DeleteAdministratorType;
        
        const deleteAdministratorService = new DeleteAdministratorService();

        await deleteAdministratorService.execute(registration);

        return response.status(201).json({message:"Administrator Deleted Successfully !"})

    }

}

export {DeleteAdministratorController}

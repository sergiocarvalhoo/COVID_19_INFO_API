import { Request, Response } from "express";
import { DeleteAdministratorService } from '../../services/Administrator/DeleteAdministratorService'
import { DeleteAdministratorsType } from '../../dto/Administrator/DeleteAdministratorsType'


class DeleteAdministratorController{

    async handle(request:Request, response:Response){
        
        const registration = request.body as DeleteAdministratorsType;
        
        const deleteAdministratorService = new DeleteAdministratorService();

        await deleteAdministratorService.execute(registration);

        return response.status(200).json({message:"The Administrator has been deleted successfully!"})

    }

}

export {DeleteAdministratorController}

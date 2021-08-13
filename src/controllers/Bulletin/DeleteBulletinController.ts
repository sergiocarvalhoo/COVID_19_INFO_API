import { Request, Response } from "express";
import { DeleteBulletinService } from '../../services/Bulletin/DeleteBulletinService'
import { DeleteBulletinType } from '../../dto/Bulletin/DeleteBulletinType'


class DeleteBulletinController{

    async handle(request:Request, response:Response){
        
        const id = request.body as DeleteBulletinType;
        
        const deleteAdministratorService = new DeleteBulletinService();

        await deleteAdministratorService.execute(id);

        return response.status(200).json({message:"The Bulletin has been deleted successfully!"})

    }

}

export { DeleteBulletinController }

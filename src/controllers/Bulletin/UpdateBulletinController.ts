import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UpdateBulletinTypeService } from "../../dto/Bulletin/UpdateBulletinTypeService";
import { RepositoryAdministrators } from "../../repositories/RepositoryAdministrators";
import { UpdateBulletinService } from "../../services/Bulletin/UpdateBulletinService";


class UpdateBulletinController{

    async handle(request:Request, response:Response){
        const {id, confirmed, recovered, discarded, under_review, admitted, deaths, publication_date} = request.body as UpdateBulletinTypeService;
        
        const administratorRepository = getCustomRepository(RepositoryAdministrators);

        const author = await administratorRepository.findByRegistration(request.administrator_registration);

        const updateBulletinService = new UpdateBulletinService();

        const bulletin = await updateBulletinService.execute({
            id,
            confirmed, 
            recovered, 
            discarded, 
            under_review, 
            admitted, 
            deaths, 
            publication_date,
            author
        });

        return response.status(200).json(bulletin);
    }

}

export {UpdateBulletinController}

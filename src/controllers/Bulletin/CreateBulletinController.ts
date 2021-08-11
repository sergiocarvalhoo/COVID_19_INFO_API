import { Request, Response } from "express";
import { CreateBulletinService } from '../../services/Bulletin/CreateBulletinService'
import { BulletinType } from '../../dto/Bulletin/BulletinType'
import { getCustomRepository } from "typeorm";	
import { RepositoryAdministrators } from '../../repositories/RepositoryAdministrators'


class CreateBulletinController{

    async handle(request:Request, response:Response){
        const {confirmed, recovered, discarded, under_review, admitted, deaths, publication_date} = request.body as BulletinType;
        
        const administratorRepository = getCustomRepository(RepositoryAdministrators);

        const author = await administratorRepository.findByRegistration(request.administrator_registration);

        const createBulletinService = new CreateBulletinService();

        const bulletin = await createBulletinService.execute({
            confirmed, recovered, discarded, under_review, admitted, deaths, publication_date, author
        });

        return response.status(201).json(bulletin);
    }

}

export {CreateBulletinController}

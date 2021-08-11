import { getCustomRepository } from "typeorm";	
import { RepositoryBulletin } from '../../repositories/RepositoryBulletin';
import { Bulletin } from '../../models/Bulletin'
import { BulletinTypeService } from '../../dto/Bulletin/BulletinTypeService'
import { createBulletinValidation } from "../../utils/Bulletin/CreateBulletinValidation";
import { AppErrors } from '../../errors/AppErrors';


class CreateBulletinService {
    
    async execute(bulletinParams:BulletinTypeService): Promise<Bulletin>{

        const bulletinRepository = getCustomRepository(RepositoryBulletin);

        await createBulletinValidation(bulletinParams);

        const bulletinExists = await bulletinRepository.findByPubDate(bulletinParams.publication_date);

        if(bulletinExists){
            throw new AppErrors('There is already an Bulletin registered in this day !', 400);
        }

        const bulletin = await bulletinRepository.createBulletin({
            confirmed:bulletinParams.confirmed,
            recovered:bulletinParams.recovered,
            discarded:bulletinParams.discarded,
            under_review:bulletinParams.under_review,
            admitted:bulletinParams.admitted,
            deaths:bulletinParams.deaths,
            publication_date:bulletinParams.publication_date,
            author:bulletinParams.author
        });

        return bulletin;
    }
}

export {CreateBulletinService}

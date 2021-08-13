import { getCustomRepository } from "typeorm";
import { AppErrors } from '../../errors/AppErrors';
import { Bulletin } from "../../models/Bulletin";
import { UpdateBulletinTypeService } from "../../dto/Bulletin/UpdateBulletinTypeService";
import { RepositoryBulletin } from "../../repositories/RepositoryBulletin";
import { updateBulletinValidation } from "../../utils/Bulletin/UpdateBulletinValidation";


class UpdateBulletinService {
    
    async execute(bulletinParams:UpdateBulletinTypeService): Promise<Bulletin>{
        
        const bulletinRepository = getCustomRepository(RepositoryBulletin);

        await updateBulletinValidation(bulletinParams);

        const bulletin = await bulletinRepository.findById(bulletinParams.id);

        if(!bulletin){
            throw new AppErrors('Bulletin not Found !', 404);
        }
    
        bulletin.confirmed = bulletinParams.confirmed;
        bulletin.recovered = bulletinParams.recovered;
        bulletin.discarded = bulletinParams.discarded;
        bulletin.under_review = bulletinParams.under_review;
        bulletin.admitted = bulletinParams.admitted;
        bulletin.deaths = bulletinParams.deaths;
        bulletin.publication_date = bulletinParams.publication_date;
    
        return await bulletinRepository.createBulletin(bulletin)
    }
}

export {UpdateBulletinService}

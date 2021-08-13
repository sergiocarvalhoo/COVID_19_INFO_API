import { getCustomRepository } from "typeorm";	
import { RepositoryBulletin } from '../../repositories/RepositoryBulletin';
import { DeleteBulletinType } from '../../dto/Bulletin/DeleteBulletinType'
import { deleteBulletinValidation } from "../../utils/Bulletin/DeleteBulletinValidation";
import { AppErrors } from '../../errors/AppErrors';


class DeleteBulletinService {

    async execute(bulletinParams:DeleteBulletinType){

        const bulletinRepository = getCustomRepository(RepositoryBulletin);

        await deleteBulletinValidation(bulletinParams);

        const bulletin = await bulletinRepository.findById(bulletinParams.id);

        if(!bulletin){
            throw new AppErrors('No have any bulletin registered with this ID !', 400);
        }

        if(bulletin){
            await bulletinRepository.delete(bulletin.id)
        }
        
    }
}

export { DeleteBulletinService }

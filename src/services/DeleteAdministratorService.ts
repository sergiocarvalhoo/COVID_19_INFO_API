import { getCustomRepository } from "typeorm";	
import { RepositoryAdministrators } from '../repositories/RepositoryAdministrators';
import { DeleteAdministratorType } from '../dataio/DeleteAdministratorsType'
import { AppErrors } from '../errors/AppErrors';

class DeleteAdministratorService {

    async execute({registration}:DeleteAdministratorType){

        const administratorsRepository = getCustomRepository(RepositoryAdministrators);

        if(!registration){
            throw new AppErrors('The administrators Registration is invalid !', 400);
        }

        const administrator = await administratorsRepository.findByRegistration(registration);

        if(!administrator){
            throw new AppErrors('No have any administrator registered with this Registration number !', 400);
        }

        if(administrator){
            await administratorsRepository.remove(administrator)
        }
        
    }
}

export {DeleteAdministratorService}

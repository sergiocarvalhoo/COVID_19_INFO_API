import { getCustomRepository } from "typeorm";	
import { RepositoryAdministrators } from '../repositories/RepositoryAdministrators';
import { DeleteAdministratorsType } from '../dto/DeleteAdministratorsType'
import { deleteAdministratorValidation } from "../utils/DeleteAdministratorValidation";
import { AppErrors } from '../errors/AppErrors';


class DeleteAdministratorService {

    async execute(administratorParams:DeleteAdministratorsType){

        const administratorsRepository = getCustomRepository(RepositoryAdministrators);

        await deleteAdministratorValidation(administratorParams);

        const administrator = await administratorsRepository.findByRegistration(administratorParams.registration);

        if(!administrator){
            throw new AppErrors('No have any administrator registered with this Registration number !', 400);
        }

        if(administrator){
            await administratorsRepository.delete(administrator.registration)
        }
        
    }
}

export {DeleteAdministratorService}

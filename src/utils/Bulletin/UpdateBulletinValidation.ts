import * as Yup from 'yup'
import { UpdateBulletinTypeService } from '../../dto/Bulletin/UpdateBulletinTypeService';


export async function updateBulletinValidation(bulletinObject:UpdateBulletinTypeService) {
    
    const schema = Yup.object().shape({
        id: Yup.number().required(),
        confirmed: Yup.number().required(),
        recovered: Yup.number().required(),
        discarded: Yup.number().required(),
        under_review: Yup.number().required(),
        admitted: Yup.number().required(),
        deaths: Yup.number().required(),
        publication_date: Yup.date().required(),
    });

    try{
        await schema.validate(bulletinObject, {abortEarly:false});
    }
    catch(error){
        throw new Yup.ValidationError(error)
    }
}

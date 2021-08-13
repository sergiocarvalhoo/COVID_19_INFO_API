import * as Yup from 'yup'
import { DeleteBulletinType } from '../../dto/Bulletin/DeleteBulletinType';


export async function deleteBulletinValidation(bulletinObject:DeleteBulletinType) {
    
    const schema = Yup.object().shape({
        id: Yup.number().required(),
    });

    try{
        await schema.validate(bulletinObject, {abortEarly:false});
    }
    catch(error){
        throw new Yup.ValidationError(error)
    }
}

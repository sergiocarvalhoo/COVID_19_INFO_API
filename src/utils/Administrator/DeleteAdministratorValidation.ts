import * as Yup from 'yup'
import { DeleteAdministratorsType } from '../../dto/Administrator/DeleteAdministratorsType'


export async function deleteAdministratorValidation(administratorObject:DeleteAdministratorsType) {
    
    const schema = Yup.object().shape({
        registration: Yup.string().required().min(15).max(15)
    });

    try{
        await schema.validate(administratorObject, {abortEarly:false});
    }
    catch(error){
        throw new Yup.ValidationError(error)
    }
}

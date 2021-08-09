import * as Yup from 'yup'
import { UpdateAdministratorsType } from '../../dto/Administrator/UpdateAdministratorsType'


export async function updateAdministratorValidation(administratorObject:UpdateAdministratorsType) {
    
    const schema = Yup.object().shape({
        name: Yup.string().required(),
        password: Yup.string().required().min(8),
        email: Yup.string().required(),
        occupation: Yup.string().required()
    });

    try{
        await schema.validate(administratorObject, {abortEarly:false});
    }
    catch(error){
        throw new Yup.ValidationError(error)
    }
}

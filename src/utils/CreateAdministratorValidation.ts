import * as Yup from 'yup'
import { AdministratorsType } from '../dto/AdministratorsType'


export async function createAdministratorValidation(administratorObject:AdministratorsType) {
    
    const schema = Yup.object().shape({
        name: Yup.string().required(),
        registration: Yup.string().required().min(15).max(15),
        cpf: Yup.string().required().min(14).max(14),
        birth_date: Yup.date().required(),
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

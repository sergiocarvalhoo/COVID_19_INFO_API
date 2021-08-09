import * as Yup from 'yup'
import { AuthenticationType } from '../../dto/Administrator/AuthenticationType'


export async function authenticateAdministratorValidation(administratorObject:AuthenticationType) {
    
    const schema = Yup.object().shape({
        cpf: Yup.string().required().min(14).max(14),
        password: Yup.string().required().min(8)
    });

    try{
        await schema.validate(administratorObject, {abortEarly:false});
    }
    catch(error){
        throw new Yup.ValidationError(error)
    }
}

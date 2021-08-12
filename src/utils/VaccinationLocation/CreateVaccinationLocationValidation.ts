import * as Yup from 'yup'
import { VaccinationLocationType } from '../../dto/VaccinationLocation/VaccinationLocationType'


export async function CreateVaccinationLocationValidation(vaccinationLocationObject:VaccinationLocationType) {
    
    const schema = Yup.object().shape({
        name: Yup.string().required(),
        description: Yup.string().required(),
        latitude: Yup.number().required(),
        longitude: Yup.number().required(),
    });

    try{
        await schema.validate(vaccinationLocationObject, {abortEarly:false});
    }
    catch(error){
        throw new Yup.ValidationError(error)
    }
}

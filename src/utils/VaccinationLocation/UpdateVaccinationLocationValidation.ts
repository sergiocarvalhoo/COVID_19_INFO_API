import * as Yup from 'yup'
import { UpdateVaccinationLocationTypeService } from '../../dto/VaccinationLocation/UpdateVaccinationLocationTypeService';


export async function updateVaccinationLocationValidation(vaccinationLocationObject: UpdateVaccinationLocationTypeService) {

    const schema = Yup.object().shape({
        id: Yup.number().required(),
        name: Yup.string().required(),
        description: Yup.string().required(),
        latitude: Yup.number().required(),
        longitude: Yup.number().required(),
    });

    try {
        await schema.validate(vaccinationLocationObject, { abortEarly: false });
    }
    catch (error) {
        throw new Yup.ValidationError(error)
    }
}

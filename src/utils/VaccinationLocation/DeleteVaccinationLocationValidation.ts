import * as Yup from 'yup'
import { DeleteVaccinationLocationType } from '../../dto/VaccinationLocation/DeleteVaccinationLocationType';


export async function deleteVaccinationLocationValidation(vaccinationLocationObject: DeleteVaccinationLocationType) {

    const schema = Yup.object().shape({
        id: Yup.number().required(),
    });

    try {
        await schema.validate(vaccinationLocationObject, { abortEarly: false });
    }
    catch (error) {
        throw new Yup.ValidationError(error)
    }
}

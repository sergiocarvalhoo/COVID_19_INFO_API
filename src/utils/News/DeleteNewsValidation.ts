import * as Yup from 'yup'
import { DeleteNewsType } from '../../dto/News/DeleteNewsType';

export async function deleteNewsValidation(newsObject: DeleteNewsType) {

    const schema = Yup.object().shape({
        id: Yup.number().required()
    });

    try {
        await schema.validate(newsObject, { abortEarly: false });
    }
    catch (error) {
        throw new Yup.ValidationError(error)
    }
}
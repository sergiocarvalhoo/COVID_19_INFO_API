import * as Yup from 'yup'
import { UpdateNewsType } from '../../dto/News/UpdateNewsType'

export async function updateNewsValidation(newsObject: UpdateNewsType) {

    const schema = Yup.object().shape({
        title: Yup.string().required(),
        description: Yup.string().required(),
    });

    try {
        await schema.validate(newsObject, { abortEarly: false });
    }
    catch (error) {
        throw new Yup.ValidationError(error)
    }

}
import * as Yup from 'yup'
import { NewsType } from '../../dto/News/NewsType'

export async function createNewsValidation(newsObject: NewsType) {

    const schema = Yup.object().shape({
        title: Yup.string().required(),
        description: Yup.string().required(),
        publication_date: Yup.date().required(),
    });

    try {
        await schema.validate(newsObject, { abortEarly: false });
    }
    catch (error) {
        throw new Yup.ValidationError(error)
    }
}

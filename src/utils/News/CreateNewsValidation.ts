import * as Yup from 'yup'
import { NewsTypeService } from '../../dto/News/NewsTypeService'


export async function createNewsValidation(newsObject: NewsTypeService) {

    const schema = Yup.object().shape({
        title: Yup.string().required(),
        description: Yup.string().required(),
        publication_date: Yup.date().required(),
        images: Yup.array(
            Yup.object().shape({
                path: Yup.string().required(),
            })
        ),
    });

    try {
        await schema.validate(newsObject, { abortEarly: false });
    }
    catch (error) {
        throw new Yup.ValidationError(error)
    }
}

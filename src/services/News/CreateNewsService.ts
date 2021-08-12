import { getCustomRepository } from "typeorm";
import { RepositoryNews } from '../../repositories/RepositoryNews';
import { News } from '../../models/News'
import { NewsTypeService } from '../../dto/News/NewsTypeService'
import { createNewsValidation } from "../../utils/News/CreateNewsValidation";
import { AppErrors } from '../../errors/AppErrors';


class CreateNewsService {

    async execute(newsParams: NewsTypeService): Promise<News> {

        const newsRepository = getCustomRepository(RepositoryNews);

        await createNewsValidation(newsParams);

        const newstitleExists = await newsRepository.findByTitle(newsParams.title);

        if (newstitleExists) {
            throw new AppErrors('Ja existe uma noticia com este titulo!', 400);
        }

        const news = await newsRepository.createNews(newsParams);

        return news
    }
}

export { CreateNewsService }

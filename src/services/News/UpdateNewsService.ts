import { compare } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { AppErrors } from "../../errors/AppErrors";
import { RepositoryNews } from "../../repositories/RepositoryNews";
import { UpdateNewsType } from "../../dto/News/UpdateNewsType";
import { updateNewsValidation } from "../../utils/News/UpdateNewsValidation";
import { News } from "../../models/News";


class UpdateNewsService {

    async execute(newsParams: UpdateNewsType): Promise<News> {

        const newsRepository = getCustomRepository(RepositoryNews);

        await updateNewsValidation(newsParams);

        const news = await newsRepository.findById(newsParams.id);

        const currentDate = new Date;

        if (!news) {
            throw new AppErrors('News not found!', 404);
        }

        const old_title = news.title;

        const old_description = news.description;

        //const newsTitle = await newsRepository.findByTitle(news.title);
        //const match = await compare(newsParams.title, old_title);

        //if (newsParams.title != old_title || newsParams.description)

        if (newsParams.title == old_title && newsParams.description == old_description) {

            throw new AppErrors('Este titulo e descricao ja existem! Tente Novamente', 400);

        } else {

            news.title = newsParams.title;
            news.description = newsParams.description;
            news.publication_date = currentDate;

        }

        return await newsRepository.save(news);

    }
}

export { UpdateNewsService }
import { getCustomRepository } from "typeorm";
import { RepositoryNews } from "../../repositories/RepositoryNews";


class DetailNewsService {
    async execute(id: number) {

        const newsRepository = getCustomRepository(RepositoryNews);

        const news = await newsRepository.findOneOrFail(id,
            { relations: ['imagesPath'] }
        );

        return news;
    }
}

export { DetailNewsService };
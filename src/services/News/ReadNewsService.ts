import { getCustomRepository } from "typeorm";
import { RepositoryNews } from "../../repositories/RepositoryNews";
import { classToPlain } from "class-transformer";


class ReadNewsService {
    async execute() {
        const newsRepository = getCustomRepository(RepositoryNews);

        const news = await newsRepository.find();

        return classToPlain(news);
    }
}

export { ReadNewsService };
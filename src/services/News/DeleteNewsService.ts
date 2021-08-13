import { getCustomRepository } from "typeorm";
import { RepositoryNews } from '../../repositories/RepositoryNews';
import { DeleteNewsType } from '../../dto/News/DeleteNewsType';
import { deleteNewsValidation } from "../../utils/News/DeleteNewsValidation";
import { AppErrors } from '../../errors/AppErrors';


class DeleteNewsService {

    async execute(newsParams: DeleteNewsType) {

        const newsRepository = getCustomRepository(RepositoryNews);

        await deleteNewsValidation(newsParams);

        const news = await newsRepository.findById(newsParams.id);

        if (!news) {
            throw new AppErrors('Nao ah !', 400);
        }

        if (news) {
            await newsRepository.delete(news.id)
        }

    }
}

export { DeleteNewsService }
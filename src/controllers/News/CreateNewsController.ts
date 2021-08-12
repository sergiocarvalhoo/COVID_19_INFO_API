import { Request, Response } from "express";
import { CreateNewsService } from '../../services/News/CreateNewsService'
import { NewsType } from '../../dto/News/NewsType'
import { getCustomRepository } from "typeorm";
import { RepositoryAdministrators } from "../../repositories/RepositoryAdministrators";
import NewsView from "../../views/News/NewsView";


class CreateNewsController {

    async handle(request: Request, response: Response) {
        const { title, description, publication_date } = request.body as NewsType;

        const requestImages = request.files as Express.Multer.File[];

        const imagesPath = requestImages.map(image => ({ path: image.filename }));

        const administratorRepository = getCustomRepository(RepositoryAdministrators);

        const author = await administratorRepository.findByRegistration(request.administrator_registration);

        const createNewsService = new CreateNewsService();

        const news = await createNewsService.execute({
            title, description, publication_date, author, imagesPath
        });

        return response.status(201).json(NewsView.handleNews(news));
    }

}

export { CreateNewsController }

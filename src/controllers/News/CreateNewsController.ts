import { Request, Response } from "express";
import { CreateNewsService } from '../../services/News/CreateNewsService'
import { NewsType } from '../../dto/News/NewsType'
import { getCustomRepository } from "typeorm";
import { RepositoryAdministrators } from "../../repositories/RepositoryAdministrators";


class CreateNewsController {

    async handle(request: Request, response: Response) {
        const { title, description, publication_date } = request.body as NewsType;

        const administratorRepository = getCustomRepository(RepositoryAdministrators);

        const author = await administratorRepository.findByRegistration(request.administrator_registration);

        const createNewsService = new CreateNewsService();

        const news = await createNewsService.execute({
            title, description, publication_date, author
        });

        return response.status(201).json(news);
    }

}

export { CreateNewsController }

import { Request, Response } from "express";
import { UpdateNewsService } from "../../services/News/UpdateNewsService";
import { UpdateNewsType } from "../../dto/News/UpdateNewsType";
// import { getCustomRepository } from "typeorm";
// import { RepositoryAdministrators } from "../../repositories/RepositoryAdministrators";

class UpdateNewsController {

    async handle(request: Request, response: Response) {
        const { id, title, description } = request.body as UpdateNewsType;

        // const requestImages = request.files as Express.Multer.File[];
        // const imagesPath = requestImages.map(image => ({ path: image.filename }));

        //const administratorRepository = getCustomRepository(RepositoryAdministrators);
        //const author = await administratorRepository.findByRegistration(request.administrator_registration);

        const updateNewsService = new UpdateNewsService();

        const news = await updateNewsService.execute({
            id, title, description
        });

        return response.status(200).json(news);
    }
}

export { UpdateNewsController }
import { Request, Response } from "express";
import { ReadNewsService } from "../../services/News/ReadNewsService";


class ReadNewsController {
    async handle(request: Request, response: Response) {
        const readNewsService = new ReadNewsService();

        const news = await readNewsService.execute();

        return response.json(news);
    }
}

export { ReadNewsController };
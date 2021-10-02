import { Request, Response } from "express";
import { DetailNewsService } from "../../services/News/DetailNewsService";
import NewsView from "../../views/News/NewsView";


class DetailNewsController {
    async handle(request: Request, response: Response) {

        const { id } = request.params;

        const idNumber = parseInt(id);

        const detailNewsService = new DetailNewsService();

        const news = await detailNewsService.execute(idNumber);

        return response.json(NewsView.handleNews(news));
    }
}

export { DetailNewsController };
import { Request, Response } from "express";
import { DeleteNewsService } from '../../services/News/DeleteNewsService';
import { DeleteNewsType } from '../../dto/News/DeleteNewsType';


class DeleteNewsController {

    async handle(request: Request, response: Response) {

        const id = request.body as DeleteNewsType;

        const deleteNewsService = new DeleteNewsService();

        await deleteNewsService.execute(id);

        return response.status(200).json({ message: "The news has been deleted successfully!" })

    }

}

export { DeleteNewsController }
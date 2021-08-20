import { Request, Response } from "express";
import { ReadBulletinService } from "../../services/Bulletin/ReadBulletinService";

class ReadBulletinController {
    async handle(request: Request, response: Response) {
        const readBulletinService = new ReadBulletinService();

        const bulletin = await readBulletinService.execute();

        return response.json(bulletin);
    }
}

export { ReadBulletinController };
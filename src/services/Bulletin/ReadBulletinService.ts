import { getCustomRepository } from "typeorm";
import { RepositoryBulletin } from "../../repositories/RepositoryBulletin";
import { classToPlain } from "class-transformer";

class ReadBulletinService {
    async execute() {
        const bulletinRepository = getCustomRepository(RepositoryBulletin);

        const bulletin = await bulletinRepository.find();

        return classToPlain(bulletin);
    }
}

export { ReadBulletinService };
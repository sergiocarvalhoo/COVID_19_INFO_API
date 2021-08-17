import { getCustomRepository } from "typeorm";
import { RepositoryAdministrators } from "../../repositories/RepositoryAdministrators";
import { classToPlain } from "class-transformer";

class ReadAdministratorsService {
  async execute() {
    const administratorRepository = getCustomRepository(RepositoryAdministrators);

    const administrators = await administratorRepository.find();

    return classToPlain(administrators);
  }
}

export { ReadAdministratorsService };
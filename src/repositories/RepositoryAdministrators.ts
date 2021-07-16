import { EntityRepository, Repository } from "typeorm";
import { Administrator } from '../entities/Administrator';
import { AdministratorsType } from '../services/CreateAdministratorService'


@EntityRepository(Administrator)
class RepositoryAdministrators extends Repository<Administrator>{
    
    async findByCPF(cpf: string): Promise<Administrator | undefined> {
        return await this.findOne({ cpf })
    }

    async createAdministrator(administratorParam: AdministratorsType): Promise<Administrator>{

        const administrator = this.create(administratorParam);
        await this.save(administrator);
        
        return administrator;
    }

}

export{RepositoryAdministrators}
import { EntityRepository, Repository } from "typeorm";
import { Administrator } from '../models/Administrator';
import { AdministratorsType } from '../dto/Administrator/AdministratorsType'


@EntityRepository(Administrator)
class RepositoryAdministrators extends Repository<Administrator>{
    
    async findByCPF(cpf: string): Promise<Administrator | undefined> {
        return await this.findOne({ cpf })
    }

    async findByEmail(email: string): Promise<Administrator | undefined> {
        return await this.findOne({ email })
    }

    async findByRegistration(registration: string): Promise<Administrator | undefined> {
        return await this.findOne({ registration })
    }

    async createAdministrator(administratorParam: AdministratorsType): Promise<Administrator>{

        const administrator = this.create(administratorParam);
        await this.save(administrator);
        
        return administrator;
    }

}

export{RepositoryAdministrators}

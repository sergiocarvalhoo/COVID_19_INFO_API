import { EntityRepository, Repository } from "typeorm";
import { Administrator } from '../entities/Administrator';

@EntityRepository(Administrator)
class RepositoryAdministrators extends Repository<Administrator>{
    
    async findByCPF(cpf:string ){
        return await this.findOne({cpf})
    }

    async createAdministrator(name:string, registration:string, cpf:string, birth_date:Date, password:string, email:string, occupation:string){
        const administrator = this.create({
            name, registration, cpf, birth_date, password, email, occupation
        });
        await this.save(administrator);
        return administrator;
    }

}

export{RepositoryAdministrators}

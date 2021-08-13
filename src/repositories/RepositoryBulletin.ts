import { EntityRepository, Repository } from "typeorm";
import { Bulletin } from '../models/Bulletin';
import { BulletinTypeService } from '../dto/Bulletin/BulletinTypeService'


@EntityRepository(Bulletin)
class RepositoryBulletin extends Repository<Bulletin>{
    
    async findByPubDate(publication_date: Date): Promise<Bulletin | undefined> {
        return await this.findOne({ publication_date })
    }

    async findById(id: number): Promise<Bulletin | undefined> {
        return await this.findOne({ id })
    }

    async createBulletin(bulletinParam: BulletinTypeService): Promise<Bulletin>{

        const bulletin = this.create(bulletinParam);
        await this.save(bulletin);
        
        return bulletin;
    }

}

export{RepositoryBulletin}

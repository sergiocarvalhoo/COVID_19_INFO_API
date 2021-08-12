import { EntityRepository, Repository } from "typeorm";
import { News } from '../models/News';
import { NewsTypeService } from '../dto/News/NewsTypeService'


@EntityRepository(News)
class RepositoryNews extends Repository<News>{

    async findByTitle(title: string): Promise<News | undefined> {
        return await this.findOne({ title })
    }

    async findAssociationById(id: number): Promise<News | undefined> {
        return await this.findOne(id, { relations: ["imagesPath"] });
    }

    async createNews(newsParam: NewsTypeService): Promise<News> {

        const news = this.create(newsParam);
        await this.save(news);

        return news;
    }

}

export { RepositoryNews }
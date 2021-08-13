import { EntityRepository, Repository } from "typeorm";
import { News } from '../models/News';
import { DeleteNewsType } from "../dto/News/DeleteNewsType";
import { NewsTypeService } from '../dto/News/NewsTypeService'
import { DeleteNewsService } from "../services/News/DeleteNewsService";
import { Image } from "../models/Image";


@EntityRepository(News)
class RepositoryNews extends Repository<News>{

    async findByTitle(title: string): Promise<News | undefined> {
        return await this.findOne({ title })
    }

    async findById(id: number): Promise<News | undefined> {
        return await this.findOne({ id })
    }

    async createNews(newsParam: NewsTypeService): Promise<News> {

        const news = this.create(newsParam);
        await this.save(news);

        return news;
    }

}

export { RepositoryNews }
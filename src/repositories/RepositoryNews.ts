import { EntityRepository, Repository } from "typeorm";
import { News } from '../models/News';
import { NewsTypee } from '../dto/News/NewsTypee'


@EntityRepository(News)
class RepositoryNews extends Repository<News>{

    async findByTitle(title: string): Promise<News | undefined> {
        return await this.findOne({ title })
    }

    async createNews(newsParam: NewsTypee): Promise<News> {

        const news = this.create(newsParam);
        await this.save(news);

        return news;
    }

}

export { RepositoryNews }
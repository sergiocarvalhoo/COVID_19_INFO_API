import { News } from '../../models/News';
import ImagesView from '../News/ImagesViews';

export default {

  handleNews(news: News) {
    return {
      id: news.id,
      title: news.title,
      description: news.description,
      publication_date: news.publication_date,
      imagesPath: ImagesView.handleManyImages(news.imagesPath)
    }
  },
  hanldeManyNews(news: News[]) {
    return news.map(news => this.handleNews(news));
  }
}
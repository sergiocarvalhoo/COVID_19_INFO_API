import { Image } from '../../models/Image';

interface ImageResponse {
  id: number;
  url: string;
}
export default {

  handleImage(image: Image): ImageResponse {
    const {URL} = process.env;
    return {
      id: image.id,
      url: URL + image.path
    };
  },

  handleManyImages(images: Image[]): ImageResponse[] {
    return images.map(image => this.handleImage(image));
  }
}
import { Image } from '../../models/Image';

interface ImageResponse {
  id: number;
  url: string;
}
export default {

  handleImage(image: Image): ImageResponse {
    return {
      id: image.id,
      url: `http://localhost:3333/uploads/${image.path}`
    };
  },
  handleManyImages(images: Image[]): ImageResponse[] {
    return images.map(image => this.handleImage(image));
  }
}
import { createPhotos } from './data.js';
import { renderPictures } from './user-images.js';

const similarImages = createPhotos();

renderPictures(similarImages);

import { createPhotos } from './data.js';
import { renderPictures } from './similar-images.js';
import { setModalHandlers } from './user-modal.js';

const similarImages = createPhotos();

renderPictures(similarImages);
setModalHandlers();

import { createPhotos } from './data.js';
import { renderPictures } from './similar-images.js';
import { setModalHandlers } from './user-modal.js';
import { userScaleElements } from './scale.js';
import { sliderElements } from './slider.js';

const similarImages = createPhotos();

renderPictures(similarImages);
setModalHandlers();
userScaleElements();
sliderElements();

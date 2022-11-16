import { renderPictures } from './similar-images.js';
import { closeUserModal } from './user-modal.js';
import { userScaleElements } from './scale.js';
import { sliderElements } from './slider.js';
import { setUserFormSubmit} from './user-form.js';
import { getData } from './api.js';

const SIMILAR_PHOTOS_COUNT = 25;

closeUserModal();
userScaleElements();
sliderElements();

getData((photos) => {
  renderPictures(photos.slice(0, SIMILAR_PHOTOS_COUNT));
});

setUserFormSubmit(closeUserModal);
// mesengers();
// mesengersError();

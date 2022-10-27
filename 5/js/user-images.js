import {createPhotos} from './data.js';

const userImages = document.querySelector('.pictures');
const similarImageTemplate = document.querySelector('#picture').content.querySelector('.picture');

const similarImages = createPhotos();

const DocumentFragment = document.createDocumentFragment();

similarImages.forEach(({url,description,likes,comment}) => {
  const imageElement = similarImageTemplate.cloneNode(true);
  imageElement.querySelector('.picture__img').textContent = url;
  imageElement.querySelector('.picture__info').textContent = description;
  imageElement.querySelector('.picture__likes').textContent = likes;
  imageElement.querySelector('.picture__comments').textContent = comment;
  DocumentFragment.appendChild(imageElement);
});

userImages.appendChild(DocumentFragment);

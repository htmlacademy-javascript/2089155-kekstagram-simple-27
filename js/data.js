import {getRandomArrayElement, getRandomPositiveInteger} from './util.js';

let index = 1;

const descriptionPhotos = [
  'cat',
  'dog',
  'mouse',
  'horse',
  'sheep',
  'chicken',
  'cow',
  'pig',
  'giraffe',
  'kangaroo',
  'elephant',
  'lion',
  'tiger',
  'ostrich',
  'hippopotamus',
  'bear',
  'fox',
  'wolf',
  'hare',
  'snake',
  'leopard',
  'owl',
  'eagle',
  'donkey',
  'camel'
];

const createPhoto = () => ({
  url: `photos/${index++}.jpg`,
  description: getRandomArrayElement(descriptionPhotos),
  likes: getRandomPositiveInteger(15, 200),
  comment: getRandomPositiveInteger(0, 200)
});

const createPhotos = (length = 25) => Array.from({length: length}, createPhoto);

export {createPhotos};

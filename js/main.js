// function checkStringLength (string, length) {
//   return string.length <= length;
// }

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

const getRandomPositiveInteger = (a, b) => {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const createPhoto = () => ({
  url: `photos/${index++}.jpg`,
  description: getRandomArrayElement(descriptionPhotos),
  likes: getRandomPositiveInteger(15, 200),
  comment: getRandomPositiveInteger(0, 200)
});

const similarPhotos = Array.from({length: 25}, createPhoto);

// eslint-disable-next-line no-console
console.log(similarPhotos);

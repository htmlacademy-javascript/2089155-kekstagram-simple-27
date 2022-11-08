const none = document.querySelector('#effect-none');
const chrome = document.querySelector('#effect-chrome');
const sepia = document.querySelector('#effect-sepia');
const marvin = document.querySelector('#effect-marvin');
const phobos = document.querySelector('#effect-phobos');
const heat = document.querySelector('#effect-heat');

const effect = () => {

  none.addEventListener('click', () => {
    document.querySelector('.img-upload__preview').classList.remove('effects__preview--chrome');
    document.querySelector('.img-upload__preview').classList.remove('effects__preview--sepia');
    document.querySelector('.img-upload__preview').classList.remove('effects__preview--marvin');
    document.querySelector('.img-upload__preview').classList.remove('effects__preview--phobos');
    document.querySelector('.img-upload__preview').classList.remove('effects__preview--heat');

    document.querySelector('.img-upload__preview').classList.add('effects__preview--none');
  });

  chrome.addEventListener('click', () => {
    document.querySelector('.img-upload__preview').classList.remove('effects__preview--none');
    document.querySelector('.img-upload__preview').classList.remove('effects__preview--sepia');
    document.querySelector('.img-upload__preview').classList.remove('effects__preview--marvin');
    document.querySelector('.img-upload__preview').classList.remove('effects__preview--phobos');
    document.querySelector('.img-upload__preview').classList.remove('effects__preview--heat');

    document.querySelector('.img-upload__preview').classList.add('effects__preview--chrome');
  });

  sepia.addEventListener('click', () => {
    document.querySelector('.img-upload__preview').classList.remove('effects__preview--chrome');
    document.querySelector('.img-upload__preview').classList.remove('effects__preview--none');
    document.querySelector('.img-upload__preview').classList.remove('effects__preview--marvin');
    document.querySelector('.img-upload__preview').classList.remove('effects__preview--phobos');
    document.querySelector('.img-upload__preview').classList.remove('effects__preview--heat');

    document.querySelector('.img-upload__preview').classList.add('effects__preview--sepia');
  });

  marvin.addEventListener('click', () => {
    document.querySelector('.img-upload__preview').classList.remove('effects__preview--chrome');
    document.querySelector('.img-upload__preview').classList.remove('effects__preview--sepia');
    document.querySelector('.img-upload__preview').classList.remove('effects__preview--none');
    document.querySelector('.img-upload__preview').classList.remove('effects__preview--phobos');
    document.querySelector('.img-upload__preview').classList.remove('effects__preview--heat');

    document.querySelector('.img-upload__preview').classList.add('effects__preview--marvin');
  });

  phobos.addEventListener('click', () => {
    document.querySelector('.img-upload__preview').classList.remove('effects__preview--chrome');
    document.querySelector('.img-upload__preview').classList.remove('effects__preview--sepia');
    document.querySelector('.img-upload__preview').classList.remove('effects__preview--marvin');
    document.querySelector('.img-upload__preview').classList.remove('effects__preview--none');
    document.querySelector('.img-upload__preview').classList.remove('effects__preview--heat');

    document.querySelector('.img-upload__preview').classList.add('effects__preview--phobos');
  });

  heat.addEventListener('click', () => {
    document.querySelector('.img-upload__preview').classList.remove('effects__preview--chrome');
    document.querySelector('.img-upload__preview').classList.remove('effects__preview--sepia');
    document.querySelector('.img-upload__preview').classList.remove('effects__preview--marvin');
    document.querySelector('.img-upload__preview').classList.remove('effects__preview--phobos');
    document.querySelector('.img-upload__preview').classList.remove('effects__preview--none');

    document.querySelector('.img-upload__preview').classList.add('effects__preview--heat');
  });
};

export {effect};

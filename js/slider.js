const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const none = document.querySelector('#effect-none');
const chrome = document.querySelector('#effect-chrome');
const sepia = document.querySelector('#effect-sepia');
const marvin = document.querySelector('#effect-marvin');
const phobos = document.querySelector('#effect-phobos');
const heat = document.querySelector('#effect-heat');

const photo = document.querySelector('.img-upload__preview');

const slider = document.querySelector('.img-upload__effect-level');

const sliderElements = () => {

  valueElement.value = 0;

  noUiSlider.create(sliderElement, {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.01,
    connect: 'lower',
  });

  none.addEventListener('change', (evt) => {
    if (evt.target.checked) {
      photo.className = 'img-upload__preview effects__preview--none';
      slider.classList.add('visually-hidden');
    }
  });

  chrome.addEventListener('change', (evt) => {
    if (evt.target.checked) {
      photo.className = 'img-upload__preview effects__preview--chrome';
      slider.classList.remove('visually-hidden');
      sliderElement.noUiSlider.set(1);

      sliderElement.noUiSlider.on('update', () => {
        valueElement.value = sliderElement.noUiSlider.get();
        photo.style.filter = `grayscale(${valueElement.value})`;
      });
    }
  });

  sepia.addEventListener('change', (evt) => {
    if (evt.target.checked) {
      photo.className = 'img-upload__preview effects__preview--sepia';
      slider.classList.remove('visually-hidden');
      sliderElement.noUiSlider.set(1);

      sliderElement.noUiSlider.on('update', () => {
        valueElement.value = sliderElement.noUiSlider.get();
        photo.style.filter = `sepia(${valueElement.value})`;
      });
    }
  });

  marvin.addEventListener('change', (evt) => {
    if (evt.target.checked) {
      photo.className = 'img-upload__preview effects__preview--marvin';
      slider.classList.remove('visually-hidden');
      sliderElement.noUiSlider.set(1);

      sliderElement.noUiSlider.on('update', () => {
        valueElement.value = sliderElement.noUiSlider.get();
        photo.style.filter = `invert(${valueElement.value * 100}%)`;
      });
    }
  });

  phobos.addEventListener('change', (evt) => {
    if (evt.target.checked) {
      photo.className = 'img-upload__preview effects__preview--phobos';
      slider.classList.remove('visually-hidden');
      sliderElement.noUiSlider.set(1);

      sliderElement.noUiSlider.on('update', () => {
        valueElement.value = sliderElement.noUiSlider.get();
        photo.style.filter = `blur(${valueElement.value * 3}px)`;
      });
    }
  });

  heat.addEventListener('change', (evt) => {
    if (evt.target.checked) {
      photo.className = 'img-upload__preview effects__preview--heat';
      slider.classList.remove('visually-hidden');
      sliderElement.noUiSlider.set(1);

      sliderElement.noUiSlider.on('update', () => {
        valueElement.value = sliderElement.noUiSlider.get();
        photo.style.filter = `brightness(${valueElement.value * 3})`;
      });
    }
  });
};

export { sliderElements };

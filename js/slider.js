const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const chrome = document.querySelector('#effect-chrome');
const sepia = document.querySelector('#effect-sepia');
const marvin = document.querySelector('#effect-marvin');
const phobos = document.querySelector('#effect-phobos');
const heat = document.querySelector('#effect-heat');

const sliderElements = () => {

  noUiSlider.create(sliderElement, {
    range: {
      min: 0,
      max: 1,
    },
    start: 0,
    step: 0.1,
    format: {
      to: function (value) {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  });

  sliderElement.noUiSlider.on('update', () => {
    valueElement.value = sliderElement.noUiSlider.get();
  });

  chrome.addEventListener('change', (evt) => {
    if (evt.target.checked) {
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1
        },
        start: 0,
        step: 0.1
      });
    } else {
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        step: 0.1
      });
      sliderElement.noUiSlider.set(0);
    }
  });

  sepia.addEventListener('change', (evt) => {
    if (evt.target.checked) {
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1
        },
        start: 0,
        step: 0.1
      });
    } else {
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        step: 0.1
      });
      sliderElement.noUiSlider.set(0);
    }
  });

  marvin.addEventListener('change', (evt) => {
    if (evt.target.checked) {
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100
        },
        start: 0,
        step: 1
      });
    } else {
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        step: 0.1
      });
      sliderElement.noUiSlider.set(0);
    }
  });

  phobos.addEventListener('change', (evt) => {
    if (evt.target.checked) {
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3
        },
        start: 0,
        step: 0.1
      });
    } else {
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        step: 0.1
      });
      sliderElement.noUiSlider.set(0);
    }
  });

  heat.addEventListener('change', (evt) => {
    if (evt.target.checked) {
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 1,
          max: 3
        },
        start: 0,
        step: 0.1
      });
    } else {
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        step: 0.1
      });
      sliderElement.noUiSlider.set(0);
    }
  });
};

export {sliderElements};

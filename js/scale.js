const STEP = 25;
const userScaleElement = document.querySelector('.scale');
const userScaleSmallerElement = userScaleElement.querySelector('.scale__control--smaller');
const userScaleBiggerElement = userScaleElement.querySelector('.scale__control--bigger');

const img = document.querySelector('.img-upload__preview img');

const userScaleElements = () => {

  userScaleSmallerElement.addEventListener('click', () => {
    const scaleValue = parseInt(document.querySelector('.scale__control--value').value, 10);
    if (scaleValue > 25 & scaleValue <= 100) {
      document.querySelector('.scale__control--value').value = `${scaleValue - STEP}%`;
      img.style.transform = `scale(0.${scaleValue - STEP})`;
    }
  });

  userScaleBiggerElement.addEventListener('click', () => {
    const scaleValue = parseInt(document.querySelector('.scale__control--value').value, 10);
    if (scaleValue >= 25 & scaleValue < 100) {
      document.querySelector('.scale__control--value').value = `${scaleValue + STEP}%`;
      img.style.transform = `scale(${(scaleValue + STEP) / 100})`;
    }
  });
};

export {userScaleElements};

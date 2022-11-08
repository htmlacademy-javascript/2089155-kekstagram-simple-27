const userScaleElement = document.querySelector('.scale');
const userScaleSmallerElement = userScaleElement.querySelector('.scale__control--smaller');
const userScaleBiggerElement = userScaleElement.querySelector('.scale__control--bigger');
let stap = document.querySelector('.scale__control--value').value;

const userScaleElements = () => {

  userScaleSmallerElement.addEventListener('click', () => {
    stap = parseInt(stap, 10);
    if (stap > 25 & stap <= 100) {
      stap = parseInt(stap, 10) - 25;
      document.querySelector('.scale__control--value').value = stap;

      if (document.querySelector('.scale__control--value').value === '25') {
        document.querySelector('.img-upload__preview').style.transform = 'scale(0.25)';
      }
      if (document.querySelector('.scale__control--value').value === '50') {
        document.querySelector('.img-upload__preview').style.transform = 'scale(0.5)';
      }
      if (document.querySelector('.scale__control--value').value === '75') {
        document.querySelector('.img-upload__preview').style.transform = 'scale(0.75)';
      }
      if (document.querySelector('.scale__control--value').value === '100') {
        document.querySelector('.img-upload__preview').style.transform = 'scale(1)';
      }
    }
  });

  userScaleBiggerElement.addEventListener('click', () => {
    stap = parseInt(stap, 10);
    if (stap >= 25 & stap < 100) {
      stap = parseInt(stap, 10) + 25;
      document.querySelector('.scale__control--value').value = stap;

      if (document.querySelector('.scale__control--value').value === '25') {
        document.querySelector('.img-upload__preview').style.transform = 'scale(0.25)';
      }
      if (document.querySelector('.scale__control--value').value === '50') {
        document.querySelector('.img-upload__preview').style.transform = 'scale(0.5)';
      }
      if (document.querySelector('.scale__control--value').value === '75') {
        document.querySelector('.img-upload__preview').style.transform = 'scale(0.75)';
      }
      if (document.querySelector('.scale__control--value').value === '100') {
        document.querySelector('.img-upload__preview').style.transform = 'scale(1)';
      }
    }
  });
};

export {userScaleElements};

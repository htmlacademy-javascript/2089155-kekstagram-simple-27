import { showAlert } from './util.js';
import { sendData } from './api.js';


const imageForm = document.querySelector('.img-upload__form');

const pristine = new Pristine(imageForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__error-text',
});
const submitButton = imageForm.querySelector('.img-upload__submit');

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Опубликовываю...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const setUserFormSubmit = (onSuccess) => {

  imageForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          onSuccess();
          unblockSubmitButton();
          showAlert('Изображение успешно загружено. Круто!');
        },
        () => {
          showAlert('Ошибка загрузки файла. Попробовать ещё раз');
          unblockSubmitButton();
        },
        new FormData(evt.target),
      );
    }

  });
};

export { setUserFormSubmit };

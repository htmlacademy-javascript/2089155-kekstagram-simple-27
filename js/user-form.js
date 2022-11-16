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


const userMesenger = document.querySelector('.pictures');
const mesengerTemplate = document.querySelector('#success').content.querySelector('.success__title');

const mesengers = (okMesenger) => {

  const DocumentFragment1 = document.createDocumentFragment();

  okMesenger.forEach(({ title, text}) => {
    const mesengerElement = mesengerTemplate.cloneNode(true);
    mesengerElement.querySelector('.success__title').textContent = title;
    mesengerElement.querySelector('.success__button').button = text;
    DocumentFragment1.appendChild(mesengerElement);
  });

  userMesenger.appendChild(DocumentFragment1);
};


const userMesengerError = document.querySelector('.pictures');
const mesengerTemplateEroor = document.querySelector('#error').content.querySelector('.error__title');

const mesengersError = (errorMesenger) => {

  const DocumentFragment2 = document.createDocumentFragment();

  errorMesenger.forEach(({ title, text}) => {
    const mesengerErrorElement = mesengerTemplateEroor.cloneNode(true);
    mesengerErrorElement.querySelector('.error__title').textContent = title;
    mesengerErrorElement.querySelector('.error__button').button = text;
    DocumentFragment2.appendChild(mesengerErrorElement);
  });

  userMesengerError.appendChild(DocumentFragment2);
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

export { setUserFormSubmit, mesengers, mesengersError};

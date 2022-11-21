import { sendData } from './api.js';

const imageForm = document.querySelector('.img-upload__form');
const submitButton = imageForm.querySelector('.img-upload__submit');
const messageTemplate = document.querySelector('#success').content.querySelector('.success');
const messageTemplateEroor = document.querySelector('#error').content.querySelector('.error');

const pristine = new Pristine(imageForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__error-text',
});

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Опубликовываю...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const onErrorButtonClick = () => {
  hideMessage();
};

const onOverlayClick = () => {
  hideMessage();
};

const onMessageEscKeydone = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideMessage();
  }
};

const showSuccessMessage = () => {
  const clonedMessageTemplate = messageTemplate.cloneNode(true);
  document.body.appendChild(clonedMessageTemplate);
  clonedMessageTemplate.querySelector('.success__button').addEventListener('click', onOverlayClick);
  document.addEventListener('keydown', onMessageEscKeydone);
};

const showErrorMessage = () => {
  const clonedMessageErrorTemplate = messageTemplateEroor.cloneNode(true);
  document.body.appendChild(clonedMessageErrorTemplate);
  clonedMessageErrorTemplate.querySelector('.error__button').addEventListener('click', onErrorButtonClick);
  document.addEventListener('keydown', onMessageEscKeydone);
};

function hideMessage() {
  const messageElement =
    document.querySelector('.success') || document.querySelector('.error');
  messageElement.remove();
  document.removeEventListener('keydown', onMessageEscKeydone);
  document.removeEventListener('click', onOverlayClick);
}

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
          showSuccessMessage();
        },
        () => {
          unblockSubmitButton();
          showErrorMessage();
        },
        new FormData(evt.target),
      );
    }

  });
};

export { setUserFormSubmit };

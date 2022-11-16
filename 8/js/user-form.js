// import { showAlert } from './util.js';
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


// const userMessage = document.querySelector('.pictures');
const messageTemplate = document.querySelector('#success').content.querySelector('.success');

// const messages = (okMessage) => {

//   const DocumentFragment1 = document.createDocumentFragment();

//   okMessage.forEach(({ title, text}) => {
//     const messageElement = messageTemplate.cloneNode(true);
//     messageElement.querySelector('.success__title').textContent = title;
//     messageElement.querySelector('.success__button').button = text;
//     DocumentFragment1.appendChild(messageElement);
//   });

//   userMessage.appendChild(DocumentFragment1);
// };


// const userMessageError = document.querySelector('.pictures');
const messageTemplateEroor = document.querySelector('#error').content.querySelector('.error__title');

// const messagesError = (errorMessage) => {

//   const DocumentFragment2 = document.createDocumentFragment();

//   errorMessage.forEach(({ title, text}) => {
//     const messageErrorElement = messageTemplateEroor.cloneNode(true);
//     messageErrorElement.querySelector('.error__title').textContent = title;
//     messageErrorElement.querySelector('.error__button').button = text;
//     DocumentFragment2.appendChild(messageErrorElement);
//   });

//   userMessageError.appendChild(DocumentFragment2);
// };

const closeSuccessMessage = () => {
  document.querySelector('.success').remove();
};

const onMessageKeydown = (evt) => {
  if (evt.key === 'Escape') {
    closeSuccessMessage();
    document.removeEventListener('keydown', onMessageKeydown);
  }
};

const showSuccessMessage = () => {
  const clonedMessageTemplate = messageTemplate.cloneNode(true);
  document.body.appendChild(clonedMessageTemplate);
  clonedMessageTemplate.querySelector('.success__button').addEventListener('click', closeSuccessMessage);
  document.addEventListener('keydown', onMessageKeydown);
};

const closeErrorMessage = () => {
  document.querySelector('.error').remove();
};

const onMessageErrorKeydown = (evt) => {
  if (evt.key === 'Escape') {
    closeErrorMessage();
    document.removeEventListener('keydown', onMessageErrorKeydown);
  }
};

const showErrorMessage = () => {
  const clonedMessageErrorTemplate = messageTemplateEroor.cloneNode(true);
  document.body.appendChild(clonedMessageErrorTemplate);
  clonedMessageErrorTemplate.querySelector('.error__button').addEventListener('click', closeErrorMessage);
  document.addEventListener('keydown', onMessageErrorKeydown);
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


export { setUserFormSubmit};

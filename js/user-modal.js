import { isEscapeKey, isEnterKey } from './util.js';
import './user-form.js';

const userModalElement = document.querySelector('.img-upload__overlay');
const userBody = document.querySelector('body');

const userModalOpenElement = document.querySelector('#upload-file');
const userModalCloseElement = userModalElement.querySelector('#upload-cancel');

const setModalHandlers = () => {

  const onPopupEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeUserModal();
    }
  };

  function openUserModal() {
    userModalElement.classList.remove('hidden');
    userBody.classList.add('modal-open');
    document.addEventListener('keydown', onPopupEscKeydown);
  }

  function closeUserModal() {
    userModalElement.classList.add('hidden');
    userBody.classList.remove('modal-open');
    document.addEventListener('keydown', onPopupEscKeydown);
    document.querySelector('.text__description').value = '';
    document.querySelector('.img-upload__input').value = '';
  }

  userModalOpenElement.addEventListener('change', () => {
    openUserModal();
  });

  userModalOpenElement.addEventListener('keydown', (evt) => {
    if (isEnterKey(evt)) {
      openUserModal();
    }
  });

  userModalCloseElement.addEventListener('click', () => {
    closeUserModal();
  });

  userModalCloseElement.addEventListener('keydown', (evt) => {
    if (isEnterKey(evt)) {
      closeUserModal();
    }
  });
};

export {setModalHandlers};

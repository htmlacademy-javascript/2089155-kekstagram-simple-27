import { isEscapeKey, isEnterKey } from './util.js';

const userModalElement = document.querySelector('.img-upload__overlay');
const userBody = document.querySelector('body');

const userModalOpenElement = document.querySelector('#upload-file');
const userModalCloseElement = userModalElement.querySelector('#upload-cancel');

const photo = document.querySelector('.img-upload__preview');
const slider = document.querySelector('.img-upload__effect-level');


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
  slider.classList.add('visually-hidden');
}

function closeUserModal() {
  userModalElement.classList.add('hidden');
  userBody.classList.remove('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
  document.querySelector('.text__description').value = '';
  document.querySelector('.img-upload__input').value = '';
  photo.className = 'img-upload__preview effects__preview--none';
  photo.style.filter = '';
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


export { openUserModal, closeUserModal };

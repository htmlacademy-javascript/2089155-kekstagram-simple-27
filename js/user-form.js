const imageForm = document.querySelector('.img-upload__form');

const pristine = new Pristine(imageForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__error-text',
});

imageForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    // eslint-disable-next-line no-console
    return console.log('Можно отправлять');
  }
  // eslint-disable-next-line no-console
  console.log('Форма невалидна');
});

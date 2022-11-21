const getData = async (onSuccess, onFail) => {
  try {
    const response = await fetch(
      'https://27.javascript.pages.academy/kekstagram-simple/data'
    );

    if (!response.ok) {
      throw new Error('Не удалось загрузить фотографии');
    }

    const offers = await response.json();
    onSuccess(offers);
  } catch (error) {
    onFail(error.message);
  }
};

const sendData = async (onSuccess, onFail, body) => {
  try {
    const response = await fetch(
      'https://27.javascript.pages.academy/kekstagram-simple',
      {
        method: 'POST',
        body,
      }
    );

    if (!response.ok) {
      throw new Error('Ошибка загрузки файла. Попробовать ещё раз');
    }

    onSuccess();
  } catch (error) {
    onFail(error.message);
  }
};

export { getData, sendData };

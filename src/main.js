// Імпортуємо біліотеку повідомлень ізітоаст
// Імпортуємо фукцію запита з бекграунда
// Імпортуємо функції створення галереї. очищення галерею, появлення лоадера та зникнення лоадера
// створюємо змінну в вигляді об єкту та захоплюємо усі потрибні єлементи з хтмл: форму,кнопку,лоадер та введеня запита
// навішуємо слухач подій на форму (подія-субміт та функція події)
// робимо функцію події :
// прибираємо дефолт оновлення
// створюємо змінну яка отримає значення вводу  запита(query)
// перевіряємо що ця значення вводу не пусте(тобто не фолс) якщо так- то припиняємо роботу функції
// у іншому випадку очіщуємо попередню галерею при неохідності
// викликаємо фунцію демонстрації лоадера
// робимо виклик функції запроса на бєкєнд з аргументом значення інпуту
// обробляємо повернений проміс методом зен та якщо бекєнд повертає пустий массив властивості дата.хітс то виводимо повідомлення за допомогою бібліотеки ізітоаст - про невдалий пошук
// у іншому випадку створюємо галерею з отриманого массиву властвості дата-хітс
// далі ловимо помилки методом катч
//  та медодом файналі у будь якому разі очищуємо форму та прибираємо лоадер

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  clearGallery,
  createGallery,
  hideLoader,
  showLoader,
} from './js/render-functions';
export const refs = {
  form: document.querySelector('form'),
  btn: document.querySelector('button'),
  input: document.querySelector('input[name="search-text"]'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
};

refs.form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const query = refs.input.value.trim();
  if (!query) {
    return;
  }
  clearGallery();
  showLoader();
  getImagesByQuery(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          title: '(',
          message: `Sorry, there are no images matching your search ${query}. Please try again!`,
          position: 'topRight',
        });
        return;
      }

      createGallery(data.hits);
    })
    .catch(error => console.log(error))
    .finally(() => {
      hideLoader();
      refs.form.reset();
    });
}

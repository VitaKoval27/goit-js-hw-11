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

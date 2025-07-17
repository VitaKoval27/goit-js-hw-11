import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { refs } from '../main';
let photo;
export function createGallery(images) {
  const img = images
    .map(
      ({
        webformatURL,
        tags,
        largeImageURL,
        likes,
        views,
        comments,
        downloads,
      }) => `<li class="gallery-item">
       <a class="gallery-link" href="${largeImageURL}">
       <img
        class="gallery-image"
        src="${webformatURL}"
        alt="${tags}"
      />
      <ul class=info-wrapper>
      <li class="info-item">
      <span>likes</span>
      ${likes}
      </li>
      <li class="info-item">
      <span>Comments</span>
      ${comments}
      </li>
      <li class="info-item"><span> Views</span>
      ${views}</li>
      <li class="info-item"><span>Downloads</span>
      ${downloads}</li>
      </ul>
      
     </a>
    </li>
     `
    )
    .join('');
  if (!photo) {
    photo = new SimpleLightbox('.gallery a', {});
  }

  refs.gallery.insertAdjacentHTML('beforeend', img);
  photo.refresh();
}
export function clearGallery() {
  refs.gallery.innerHTML = '';
}
export function showLoader() {
  refs.loader.classList.add('is-open');
}
export function hideLoader() {
  refs.loader.classList.remove('is-open');
}

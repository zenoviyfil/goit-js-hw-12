import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const API_URL = 'https://pixabay.com/api/';
const API_KEY = '41812412-8184544d67aaee5dc545e6a16';
const url = `${API_URL}?key=${API_KEY}`;

const options = {
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};
function fetchData(searchValue) {
  return fetch(`${url}&q=${searchValue}`, options).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}

const searchForm = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
loader.classList.remove('loader');

searchForm.addEventListener('submit', handleSearch);

function handleSearch(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const searchValue = form.elements.query.value;

  loader.classList.add('loader');

  fetchData(searchValue)
    .then(render)
    .catch(handleError)
    .finally(() => {
      form.reset();
      loader.classList.remove('loader');
    });
}

function render(data) {
  if (data.hits.length === 0) {
    iziToast.error({
      message: `Sorry, there are no images matching your search query. Please try again!`,
    });
  }
  gallery.innerHTML = createMarkup(data.hits);
  lightbox.refresh();
}

function handleError(error) {
  iziToast.error({
    message: `Sorry, something went wrong. Please try again later!`,
  });
}

function createMarkup(arr) {
  return arr
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        downloads,
        comments,
      }) => `<li class="gallery-item">
        <a href="${largeImageURL}">
        <img class="gallery-image" src="${webformatURL}" alt="${tags}">
            <ul class="gallery-item-description">
                <li>Likes: ${likes}</li>
                <li>Views: ${views}</li>
                <li>Downloads: ${downloads}</li>
                <li>Comments: ${comments}</li>
            </ul>
        </a>
    </li>`
    )
    .join('');
}

let lightbox = new SimpleLightbox('.gallery a', {
  /* options */
  captionsData: 'alt',
  captionDelay: 250,
});

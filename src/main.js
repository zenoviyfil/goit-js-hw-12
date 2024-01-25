import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { createMarkup } from './templates/markup.js';
import { getData } from './services/api.js';
import button from './services/button.js';

const refs = {
  searchForm: document.querySelector('.search-form'),
  gallery: document.querySelector('.gallery'),
  loader: document.getElementById('loader'),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'),
};

const queryParams = {
  query: '',
  page: 1,
  maxPage: 0,
  per_page: 40,
};

refs.searchForm.addEventListener('submit', handleSearch);

async function handleSearch(event) {
  event.preventDefault();
  refs.gallery.innerHTML = '';
  queryParams.page = 1;
  button.hide(refs.loadMoreBtn);

  const form = event.currentTarget;
  queryParams.query = form.elements.query.value.trim();

  if (!queryParams.query) {
    return;
  }

  try {
    const { hits, totalHits } = await getData(queryParams);
    queryParams.maxPage = Math.ceil(totalHits / queryParams.per_page);
    if (hits.length === 0) {
      iziToast.error({
        message: `Sorry, there are no images matching your search query. Please try again!`,
      });
    }

    createMarkup(hits, refs.gallery);

    if (hits.length > 0 && hits.length !== totalHits) {
      button.show(refs.loadMoreBtn);
      refs.loadMoreBtn.addEventListener('click', handleLoadMore);
    } else {
      button.hide(refs.loadMoreBtn);
    }
  } catch (error) {
    handleError(error);
  } finally {
    form.reset();
    lightbox.refresh();
  }
}

async function handleLoadMore() {
  queryParams.page += 1;
  button.disable(refs.loadMoreBtn, refs.loader);
  const box = document
    .querySelector('.gallery-item')
    .getBoundingClientRect();


  try {
    const { hits } = await getData(queryParams);
    createMarkup(hits, refs.gallery);

  } catch (error) {
    handleError(error);
  } finally {
    button.enable(refs.loadMoreBtn, refs.loader);
    lightbox.refresh();

    window.scrollBy({ 
      top: box.height * 2, 
      left: 0, 
      behavior: 'smooth', 
    });

    if (queryParams.page === queryParams.maxPage) {
      button.hide(refs.loadMoreBtn);
      refs.loadMoreBtn.removeEventListener('click', handleLoadMore);

      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
  }
}

function handleError(error) {
  iziToast.error({
    message: `Sorry, something went wrong. Please try again later!`,
  });
}

let lightbox = new SimpleLightbox('.gallery a', {
  /* options */
  captionsData: 'alt',
  captionDelay: 250,
});
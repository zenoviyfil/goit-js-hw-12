function createMarkup(arr, gallery) {
  const markup = arr
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

  gallery.insertAdjacentHTML('beforeend', markup);
}

export {createMarkup};
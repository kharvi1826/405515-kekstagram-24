const pictureContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const fragment = document.createDocumentFragment();

const createPhotoDescription = (array) => {
  array.forEach((miniature) => {
    const photoElement = pictureTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = miniature.url;
    photoElement.querySelector('.picture__likes').textContent = miniature.likes;
    photoElement.querySelector('.picture__comments').textContent = miniature.comments.length;
    fragment.appendChild(photoElement);
  });
  pictureContainer.appendChild(fragment);
};

export {createPhotoDescription};

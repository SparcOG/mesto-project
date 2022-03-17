//----------------------------Новая функциональность-----------------------------------------------------------------------------------
//Открытие и закрытие popup-add-button
const popupAddButton = document.querySelector('.popup-add-button');
const popupAddButtonClose = document.querySelector('.popup-add-button__close-button');
const profileAddButton = document.querySelector('.profile__add-button');

function showPopupAddButton() {
  popupAddButton.classList.remove('popup-add-button_opened');
}
popupAddButtonClose.addEventListener('click', showPopupAddButton);

function closePopupAddButton() {
  popupAddButton.classList.add('popup-add-button_opened');
}
profileAddButton.addEventListener('click', closePopupAddButton);

//----------------------------Новая функциональность-----------------------------------------------------------------------------------
//Добавление карточки
function addingСardToMarkup(galleryTitle, galleryImage) {
  const gallery = document.querySelector('.gallery');
  const galleryContainerTemplate = document.querySelector('#gallery__container-template');
  const galleryContainerClone = galleryContainerTemplate.content.cloneNode(true);

  galleryContainerClone.querySelector('.gallery__title').textContent = galleryTitle;
  galleryContainerClone.querySelector('.gallery__image').src = galleryImage;

  //Добавление лайка к карточке новым елементам
  galleryContainerClone.querySelector('.gallery__like-heart').addEventListener('click', function (evt) {
    evt.target.classList.toggle('gallery__like-heart_active');
  });
  //Удаление карточки нового елемента
  galleryContainerClone.querySelectorAll('.gallery__trash').forEach(galleryTrash => {
    galleryTrash.addEventListener('click', () => {
      const galleryCard = galleryTrash.closest('.gallery__card');
      galleryCard.remove();
    });
  });

  gallery.prepend(galleryContainerClone);
}

const popupAddButtonHandlerButton = document.querySelector('.popup-add-button__handler-button');

function closePopupHandlerButton() {
  popupAddButton.classList.add('popup-add-button_opened');
  const galleryTitle = document.querySelector('.popup-add-button__item-name');
  const galleryImage = document.querySelector('.popup-add-button__item-image');

  addingСardToMarkup(galleryTitle.value, galleryImage.value);

  galleryTitle.value = '';
  galleryImage.value = '';
}
popupAddButtonHandlerButton.addEventListener('click', closePopupHandlerButton);

//----------------------------Новая функциональность-----------------------------------------------------------------------------------
//Добавление лайка к карточке
document.querySelectorAll('.gallery__like-heart').forEach(galleryLikeHeart => {
  galleryLikeHeart.addEventListener('click', (evt) => {
    evt.target.classList.toggle('gallery__like-heart_active');
  });
});

//----------------------------Новая функциональность-------------------------------------------------------------------------
//Удаление карточки
document.querySelectorAll('.gallery__trash').forEach(galleryTrash => {
  galleryTrash.addEventListener('click', () => {
    const galleryCard = galleryTrash.closest('.gallery__card');
    galleryCard.remove();
  });
});


















//Открытие и закрытие popup
const closeButton = document.querySelector('.popup__close-button');
const popupHandlerButton = document.querySelector('.popup__handler-button');
const profileInfo = document.querySelector('.profile__info');
const popupСlose = document.querySelector('.popup');
const editButton = document.querySelector('.profile__container');

function showPopup() {
  popupСlose.classList.remove('popup_opened');
}
  closeButton.addEventListener('click', showPopup);


editButton.addEventListener('click', function (e) {
  const popupItemName = document.querySelector('.popup__item-name');
  const popupItemProfession = document.querySelector('.popup__item-profession');
    popupItemName.value = 'Жак-Ив Кусто';
    popupItemProfession.value = 'Исследователь океана';

  if (e.target.classList.contains('profile__edit-button')) {
    popupСlose.classList.add('popup_opened');
  }
});

//Функция замены текста popup
function addProfile(popupItemNameValue, popupItemProfessionValue) {

  const profileContainer = document.querySelector('.profile__container');

  const profileTitleRemove = document.querySelector('.profile__title');
  const profileParagraphRemove = document.querySelector('.profile__paragraph');
  const profileEditButtonRemove = document.querySelector('.profile__edit-button');

  const profileTitle = document.createElement('h1');
    profileTitle.classList.add('profile__title');
    profileTitle.textContent = popupItemNameValue;

  const profileParagraph = document.createElement('p');
    profileParagraph.classList.add('profile__paragraph');
    profileParagraph.textContent = popupItemProfessionValue;

  const profileEditButton = document.createElement('button');
    profileEditButton.classList.add('profile__edit-button');

  profileContainer.append(profileTitle, profileParagraph);
  profileContainer.append(profileEditButton);

  popupСlose.classList.remove('popup_opened');

  profileTitleRemove.remove();
  profileParagraphRemove.remove();
  profileEditButtonRemove.remove();
};

popupHandlerButton.addEventListener('click', function () {
  const popupItemName = document.querySelector('.popup__item-name');
  const popupItemProfession = document.querySelector('.popup__item-profession');

  addProfile(popupItemName.value, popupItemProfession.value);

  popupItemName.value = '';
  popupItemProfession.value = '';
});


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


  galleryContainerClone.querySelector('.gallery__like-heart').addEventListener('click', function (evt) {
    evt.target.classList.toggle('gallery__like-heart_active');
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
//Добавление карточки


function addProfileeeeeee() {

}




















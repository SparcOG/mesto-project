//Открытие и закрытие popup
const closeButton = document.querySelector('.popup__close-button');
const popupHandlerButton = document.querySelector('.popup__handler-button');
const profileInfo = document.querySelector('.profile__info');
const popupСlose = document.querySelector('.popup');

//Слушаем клик
const editButton = document.querySelector('.profile__container');

//Открытие и закрытие popup-add-button
const popupAddButton = document.querySelector('.popup-add-button');
const popupAddButtonClose = document.querySelector('.popup-add-button__close-button');
const popupAddButtonHandlerButton = document.querySelector('.popup-add-button__handler-button');
const profileAddButton = document.querySelector('.profile__add-button');

//Добавление карточки
const galleryContainerTemplate = document.querySelector('.gallery__container-template').content;
const gallery = document.querySelector('.gallery');


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
  const galleryContainerClone = galleryContainerTemplate.cloneNode(true);

  galleryContainerClone.querySelector('.gallery__title').textContent = galleryTitle;
  galleryContainerClone.querySelector('.gallery__image').src = galleryImage;

//Добавление лайка к карточке
  galleryContainerClone.querySelector('.gallery__like-heart').addEventListener('click', function (evt) {
    evt.target.classList.toggle('gallery__like-heart_active');
  });

  //Удаление карточки новоcозданого елемента
  galleryContainerClone.querySelectorAll('.gallery__trash').forEach(galleryTrash => {
    galleryTrash.addEventListener('click', () => {
      const galleryCard = galleryTrash.closest('.gallery__card');
      galleryCard.remove();
    });
  });

  popupAddButton.classList.remove('popup-add-button_opened');

  gallery.prepend(galleryContainerClone);
}

function closePopupHandlerButton() {
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

//----------------------------Новая функциональность-------------------------------------------------------------------------
//Добавление массива карточек в DOM
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
  ];

  initialCards.forEach(function (card) {
    const clonСards = galleryContainerTemplate.cloneNode(true);

    clonСards.querySelector('.gallery__title').textContent = card.name;
    clonСards.querySelector('.gallery__image').src = card.link;

    gallery.append(clonСards)
  })















const content = document.getElementsByClassName('content');
const formElement = document.getElementsByTagName('form');

const popup = document.querySelector('.popup');
const buttonPopupClose = document.getElementsByClassName('popup__close-button');
const profilePopupClose = document.querySelector('.popup-profile');
const cardsPopupClose = document.querySelector('.popup-cards');
const popupPictureClose = document.querySelector('.popup-picture');

const titleInput = document.querySelector('[name="title"]');
const imageInput = document.querySelector('[name="image"]');
const nameInput = document.querySelector('[name="name"]');
const jobInput = document.querySelector('[name="profession"]');

const profileTitle = document.querySelector('.profile__title');
const profileParagraph = document.querySelector('.profile__paragraph');
const textProfileTitle = profileTitle.textContent;
const textProfileParagraph = profileParagraph.textContent;
nameInput.value = textProfileTitle;
jobInput.value = textProfileParagraph;

const gallerydrverimage = document.querySelector('.gallery__image');
const gallery = document.querySelector('.gallery');

//закрытие попапов
Array.from(buttonPopupClose).forEach(element => {
  element.addEventListener('click', () => {
    profilePopupClose.classList.remove('popup_opened');
    cardsPopupClose.classList.remove('popup_opened');
    popupPictureClose.classList.remove('popup_opened');
  });
});

//открытие попапов
Array.from(content).forEach(element => {
  element.addEventListener('click', (evt) => {
    if (evt.target.getAttribute("class") == "profile__edit-button") {
      profilePopupClose.classList.add('popup_opened');
    }
    if (evt.target.getAttribute("class") == "profile__add-button") {
      cardsPopupClose.classList.add('popup_opened');
    }
    if (evt.target.getAttribute("class") == "gallery__image") {
      popupPictureClose.classList.add('popup_opened');
    }
  });
});

//Отправка данных редактирования профиля и добавления карточек
function profileFormSubmitHandler (evt) {
  evt.preventDefault();

profileTitle.textContent = nameInput.value;
profileParagraph.textContent = jobInput.value;

titleInput.value = titleInput.value;
imageInput.src = imageInput.value;

cardsPopupClose.classList.remove('popup_opened');
profilePopupClose.classList.remove('popup_opened');

createCard (imageInput.src, titleInput.value)
}

for (let i = 0 ; i < formElement.length; i++) {
  formElement[i].addEventListener('submit', profileFormSubmitHandler) ;
}

//Вставка карточек в дом
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

//Добавление карточек в дом
initialCards.forEach(function (card) {
  const galleryTitle = card.name;
  const galleryImage = card.link;

  createCard (galleryImage, galleryTitle)
})

//Созданиe карточек
function createCard (galleryImage, galleryTitle) {
  const galleryСardСreate = document.createElement('div');
  galleryСardСreate.classList.add('gallery__card');

  const buttonCreate = document.createElement('button');
  buttonCreate.classList.add('gallery__trash');

  const galleryImageCreate = document.createElement('img');
  galleryImageCreate.classList.add('gallery__image');
  galleryImageCreate.src = galleryImage;

  const galleryBackgroundCreate = document.createElement('div');
  galleryBackgroundCreate.classList.add('gallery__background');

  const galleryTitleCreate = document.createElement('h2');
  galleryTitleCreate.classList.add('gallery__title');
  galleryTitleCreate.textContent = galleryTitle;

  const galleryLikeCreate = document.createElement('button');
  galleryLikeCreate.classList.add('gallery__like-heart');

//Удаление карточек
  buttonCreate.addEventListener('click', function  () {
  const galleryCard = galleryСardСreate.closest('.gallery__card');
  galleryCard.remove();
  });

//Открытие карточек
  galleryImageCreate.addEventListener('click', function () {
    document.querySelector('.popup-picture__title').textContent = galleryTitle;
    document.querySelector('.popup-picture__image').src = galleryImage;
  });

//Лайк карточкам
  galleryLikeCreate.addEventListener('click', function (evt) {
  evt.target.classList.toggle('gallery__like-heart_active');
  });

  galleryBackgroundCreate.prepend(galleryTitleCreate, galleryLikeCreate);
  galleryСardСreate.prepend(buttonCreate, galleryImageCreate, galleryBackgroundCreate);
  gallery.prepend(galleryСardСreate);
}





















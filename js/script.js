const content = document.getElementsByClassName('content');
const formElement = document.getElementsByTagName('form');

const popup = document.querySelector('.popup');
const buttonPopupClose = document.getElementsByClassName('popup__close-button');
const profilePopupClose = document.querySelector('.popup-profile');
const cardsPopupClose = document.querySelector('.popup-cards');
const popupShowPictureClose = document.querySelector('.popup-show-picture');


/* const nameInputcasc = document.querySelector('.popup__field-1');
const jobInputascas = document.querySelector('.popup__field-2');
const image777 = galleryTitleCreate.textContent;
const title777 = profileParagraph.textContent;
nameInputcasc.value = image777; */



const nameInput = document.querySelector('.popup__field-1');
const jobInput = document.querySelector('.popup__field-2');

const profileTitle = document.querySelector('.profile__title');
const profileParagraph = document.querySelector('.profile__paragraph');
const textProfileTitle = profileTitle.textContent;
const textProfileParagraph = profileParagraph.textContent;

nameInput.value = textProfileTitle;
jobInput.value = textProfileParagraph;



const gallerydrverimage = document.querySelector('.gallery__image');



const gallery = document.querySelector('.gallery');
const galleryContainerTemplate = document.querySelector('.gallery__container-template').content;



//закрытие попапов
Array.from(buttonPopupClose).forEach(element => {
  element.addEventListener('click', () => {
    profilePopupClose.classList.remove('popup_opened');
    cardsPopupClose.classList.remove('popup_opened');
    popupShowPictureClose.classList.remove('popup_opened');
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
      popupShowPictureClose.classList.add('popup_opened');
    }
  });
});

//Отправка данных редактирования профиля
function profileFormSubmitHandler (evt) {
  evt.preventDefault();

profileTitle.textContent = nameInput.value;
profileParagraph.textContent = jobInput.value;

profilePopupClose.classList.remove('popup_opened');
}
for (let i = 0 ; i < formElement.length; i++) {
  formElement[i].addEventListener('submit', profileFormSubmitHandler) ;
}

//Отправка данных добавления карточки
function cardFormSubmitHandler (evt) {
  evt.preventDefault();

  galleryTitleCreate.textContent = galleryTitleCreate.value;

cardsPopupClose.classList.remove('popup_opened');
}

for (let i = 0 ; i < formElement.length; i++) {
  formElement[i].addEventListener('submit', cardFormSubmitHandler) ;
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
  const clonСardsInDom = galleryContainerTemplate.cloneNode(true);
  const galleryTrashRemove = clonСardsInDom.querySelector('.gallery__trash');
  const galleryImageRemove = clonСardsInDom.querySelector('.gallery__image');
  const galleryLike = clonСardsInDom.querySelector('.gallery__like-heart');


  clonСardsInDom.querySelector('.gallery__title').textContent = card.name;
  clonСardsInDom.querySelector('.gallery__image').src = card.link;
  clonСardsInDom.querySelector('.gallery__image').alt = card.name;

//Открытие карточек
  galleryImageRemove.addEventListener('click', function () {
    document.querySelector('.popup-show-picture__title').textContent = card.name;
    document.querySelector('.popup-show-picture__image').src = card.link;
  });

//Удаление карточек
  galleryTrashRemove.addEventListener('click', function () {
    const galleryCard = galleryTrashRemove.closest('.gallery__card');
    galleryCard.remove();
  });

//Лайк карточкам
  galleryLike.addEventListener('click', function (evt) { // event доступен как параметр
    evt.target.classList.toggle('gallery__like-heart_active');
  });

  gallery.append(clonСardsInDom)
})

//Функция создания карточек
function createCard (galleryImage, galleryTitle) {

}

const galleryСardСreate = document.createElement('div');
galleryСardСreate.classList.add('gallery__card');

const buttonCreate = document.createElement('button');
buttonCreate.classList.add('gallery__trash');

const galleryImageCreate = document.createElement('img');
galleryImageCreate.classList.add('gallery__image');
/* galleryImageCreate.src = galleryImage; */

const galleryBackgroundCreate = document.createElement('div');
galleryBackgroundCreate.classList.add('gallery__background');

const galleryTitleCreate = document.createElement('h2');
galleryTitleCreate.classList.add('gallery__title');
/* galleryTitleCreate.textContent = galleryTitle; */

const galleryLikeCreate = document.createElement('button');
galleryLikeCreate.classList.add('gallery__like-heart');

galleryBackgroundCreate.prepend(galleryTitleCreate, galleryLikeCreate);
galleryСardСreate.prepend(buttonCreate, galleryImageCreate, galleryBackgroundCreate);
gallery.prepend(galleryСardСreate);

//Функция добавления созданой карточки через форму


/* const galleryImage = document.querySelector('.gallery__image');
const galleryTitle = document.querySelector('.gallery__title'); */
/* const textGalleryImage = galleryImage.src;
const textGalleryTitle = galleryTitle.textContent;
 */

/* galleryImage.src = textGalleryImage;
textGalleryTitle.textContent = textGalleryImage; */




















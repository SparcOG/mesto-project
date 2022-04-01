const content = document.getElementsByClassName('content');
const formElement = document.getElementsByTagName('form');

const popup = document.querySelector('.popup');
const buttonPopupClose = document.getElementsByClassName('popup__close-button');
const profilePopupClose = document.querySelector('.popup-profile');
const cardsPopupClose = document.querySelector('.popup-cards');
const popupShowPictureClose = document.querySelector('.popup-show-picture');
const nameInput = document.querySelector('.popup__field-1');
const jobInput = document.querySelector('.popup__field-2');

const profileTitle = document.querySelector('.profile__title');
const profileParagraph = document.querySelector('.profile__paragraph');
const textTitle = profileTitle.textContent;
const textParagraph = profileParagraph.textContent;

const gallery = document.querySelector('.gallery');
const galleryContainerTemplate = document.querySelector('.gallery__container-template').content;
const galleryImage = document.querySelector('.gallery__image');
const showPicture = document.querySelector('.popup-show-picture');

nameInput.value = textTitle;
jobInput.value = textParagraph;


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
function formSubmitHandler (evt) {
  evt.preventDefault();

profileTitle.textContent = nameInput.value;
profileParagraph.textContent = jobInput.value;

profilePopupClose.classList.remove('popup_opened');
}

for (let i = 0 ; i < formElement.length; i++) {
  formElement[i].addEventListener('submit', formSubmitHandler) ;
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

//Функция добавления карточек в дом
initialCards.forEach(function createCard (card) {
  const clonСards = galleryContainerTemplate.cloneNode(true);

  clonСards.querySelector('.gallery__title').textContent = card.name;
  clonСards.querySelector('.gallery__image').src = card.link;
  clonСards.querySelector('.gallery__image').alt = card.name;

//Открытие карточек
  clonСards.querySelector('.gallery__image').addEventListener('click', function () { // event доступен как параметр
  showPicture.querySelector('.popup-show-picture__title').textContent = card.name;
  showPicture.querySelector('.popup-show-picture__image').src = card.link;
});

  clonСards.querySelector('.gallery__trash').addEventListener('click', function () { // event доступен как параметр
    const galleryCard = galleryTrash.closest('.gallery__card');
    galleryCard.remove();////Нужно дальше разбиратся с карточками
});


//Удаление карточек
  clonСards.querySelectorAll('.gallery__trash').forEach(galleryTrash => {
    galleryTrash.addEventListener('click', () => {
      const galleryCard = galleryTrash.closest('.gallery__card');
      galleryCard.remove();
    })
  })




    gallery.append(clonСards)
  })

  //Добавление карточек
function createCard () {

}

//Открытие карточек
document.querySelector('.gallery__image').addEventListener('click', function () { // event доступен как параметр
  showPicture.querySelector('.popup-show-picture__title').textContent = card.name;
  showPicture.querySelector('.popup-show-picture__image').src = card.link;
});

//Добавлнение лайка карточкам
document.querySelectorAll('.gallery__like-heart').forEach(galleryLikeHeart => {
  galleryLikeHeart.addEventListener('click', (evt) => {
    evt.target.classList.toggle('gallery__like-heart_active');
  })
})



















//---------------------------------------------------------------------------------------

//Открытие и закрытие popup


const profileInfo = document.querySelector('.profile__info');


//Слушаем клик
const profile2 = document.querySelector('.profile__container');

//Открытие и закрытие popup-add-button

const profileAddButton = document.querySelector('.profile__add-button');

//Добавление карточки


//Открытие и закрытие popup-show-picture











//Добавление карточки
/* function addingСardToMarkup(galleryTitle, galleryImage) {
  const galleryContainerClone = galleryContainerTemplate.cloneNode(true);

  galleryContainerClone.querySelector('.gallery__title').textContent = galleryTitle;
  galleryContainerClone.querySelector('.gallery__image').src = galleryImage;

//Добавление лайка к карточке
  galleryContainerClone.querySelector('.gallery__like-heart').addEventListener('click', function (evt) {
    evt.target.classList.toggle('gallery__like-heart_active');
  })

//Удаление карточки новоcозданого елемента
  galleryContainerClone.querySelectorAll('.gallery__trash').forEach(galleryTrash => {
    galleryTrash.addEventListener('click', () => {
      const galleryCard = galleryTrash.closest('.gallery__card');
      galleryCard.remove();
    })
  })

 //Открытие картинки на созданых картинках
  initialCards.forEach(function () {
    galleryContainerClone.querySelectorAll('.gallery__image').forEach(galleryImage2 => {
      galleryImage2.addEventListener('click', () => {
        showPicture.querySelector('.popup-show-picture__title').textContent = galleryTitle;
        showPicture.querySelector('.popup-show-picture__image').src = galleryImage;
      })
    })
  })


  gallery.prepend(galleryContainerClone);
} */


/* initialCards.forEach(function (card) {
  const clonСards = galleryContainerTemplate.cloneNode(true);

  clonСards.querySelector('.gallery__title').textContent = card.name;
  clonСards.querySelector('.gallery__image').src = card.link;
  clonСards.querySelector('.gallery__image').alt = card.name;

//Добавлнение лайка
  clonСards.querySelectorAll('.gallery__like-heart').forEach(galleryLikeHeart => {
    galleryLikeHeart.addEventListener('click', (evt) => {
      evt.target.classList.toggle('gallery__like-heart_active');
    })
})



//Открытие картинки
clonСards.querySelectorAll('.gallery__image').forEach(galleryImage => {
  galleryImage.addEventListener('click', () => {
    showPicture.querySelector('.popup-show-picture__title').textContent = card.name;
    showPicture.querySelector('.popup-show-picture__image').src = card.link;
  })
})

  gallery.append(clonСards)
}) */

/* function closePopupHandlerButton() {
  const galleryTitle = document.querySelector('.popup__field-1');
  const galleryImage = document.querySelector('.popup__field-2');

  addingСardToMarkup(galleryTitle.value, galleryImage.value);

  galleryTitle.value = '';
  galleryImage.value = '';
}
formElement.addEventListener('click', closePopupHandlerButton); */


//Добавление массива карточек в DOM







/*   profile2.addEventListener('click', function (evt) {
  const popupItemName = document.querySelector('.popup__field-1');
  const popupItemProfession = document.querySelector('.popup__field-2');
  const profileTitle = document.querySelector('.profile__title');
  const profileParagraph = document.querySelector('.profile__paragraph');
  const textTitle = profileTitle.textContent;
  const textParagraph = profileParagraph.textContent;
    popupItemName.value = textTitle;
    popupItemProfession.value = textParagraph;

//    popup.classList.add('popup_opened');

})
 */

//Функция замены текста popup
/* function addProfile(popupItemNameValue, popupItemProfessionValue) {

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

  popup.classList.remove('popup_opened');

  profileTitleRemove.remove();
  profileParagraphRemove.remove();
  profileEditButtonRemove.remove();
}
 */

/* popupHandlerButton.addEventListener('click', function () {
  const popupItemName = document.querySelector('.popup__item-name');
  const popupItemProfession = document.querySelector('.popup__item-profession');

  addProfile(popupItemName.value, popupItemProfession.value);

  popupItemName.value = '';
  popupItemProfession.value = '';
}) */

//Удаление карточки
/* clonСards.querySelectorAll('.gallery__trash').forEach(galleryTrash => {
  galleryTrash.addEventListener('click', () => {
    const galleryCard = galleryTrash.closest('.gallery__card');
    galleryCard.remove();
    })
}) */


















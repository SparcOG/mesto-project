const content = document.getElementsByClassName('content');
const formElement = document.getElementsByTagName('form');

const popup = document.querySelectorAll('.popup');
const buttonPopupClose = document.querySelectorAll('.popup__close-button');
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





function closePopup (sdfvdsfv) {
  sdfvdsfv.classList.remove('popup')
}

for (let i = 0 ; i < popup.length; i++) {
const sdfvdsfv = popup[i];
closePopup (sdfvdsfv);
}


for (let i = 0 ; i < buttonPopupClose.length; i++) {
  buttonPopupClose[i].addEventListener('click', closePopup);
}







/* for (let i = 0 ; i < buttonPopupClose.length; i++) {
  buttonPopupClose[i].addEventListener('click', closePopup);
}

function closePopup () {
for (let i = 0 ; i < popup.length; i++) {
  popup[i].classList.remove('popup_opened')
}
} */

/* for (let i = 0 ; i < popup.length; i++) {
  const popup2 = popup[i];

  console.log(popup[i])
  closePopup (popup2);
}
 */

/*  function closePopup () {
  popup.classList.remove('popup_opened');
}
buttonPopupClose.addEventListener('click', closePopup); */



/* for (let i = 0 ; i < buttonPopupClose.length; i++) {
  console.log(buttonPopupClose[i])
  buttonPopupClose[i].addEventListener('click', closePopup);
} */
/*
buttonPopupClose[0].addEventListener('click', closePopup) ;

for (let i = 0 ; i < popup.length; i++) {
  const popup2 = popup[i];
  closePopup (popup2)
} */


/* for (let i = 0 ; i < buttonPopupClose.length; i++) {
  console.log(buttonPopupClose[i])
  buttonPopupClose[i].addEventListener('click', closePopup) ;
} */


/* for (let i = 0 ; i < popup.length; i++) {
  console.log(buttonPopupClose[i])
  popup[i].addEventListener('click', closePopup) ;
  closePopup ()
} */


//???????????????? ??????????????
/* Array.from(buttonPopupClose).forEach(element => {
  element.addEventListener('click', () => {
    profilePopupClose.classList.remove('popup_opened');
    cardsPopupClose.classList.remove('popup_opened');
    popupPictureClose.classList.remove('popup_opened');
  });
}); */

//???????????????? ??????????????
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

//???????????????? ???????????? ???????????????????????????? ?????????????? ?? ???????????????????? ????????????????
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

//?????????????? ???????????????? ?? ??????
const initialCards = [
  {
    name: '??????????',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: '?????????????????????? ??????????????',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: '??????????????',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: '????????????????',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: '???????????????????????? ??????????',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: '????????????',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
  ];

//???????????????????? ???????????????? ?? ??????
initialCards.forEach(function (card) {
  const galleryTitle = card.name;
  const galleryImage = card.link;
  createCard (galleryImage, galleryTitle)
})

//??????????????e ????????????????
function createCard (galleryImage, galleryTitle) {
  const gallery??ard??reate = document.createElement('div');
  gallery??ard??reate.classList.add('gallery__card');

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

//???????????????? ????????????????
  buttonCreate.addEventListener('click', function  () {
  const galleryCard = gallery??ard??reate.closest('.gallery__card');
  galleryCard.remove();
  });

//???????????????? ????????????????
  galleryImageCreate.addEventListener('click', function () {
    document.querySelector('.popup-picture__title').textContent = galleryTitle;
    document.querySelector('.popup-picture__image').src = galleryImage;
  });

//???????? ??????????????????
  galleryLikeCreate.addEventListener('click', function (evt) {
  evt.target.classList.toggle('gallery__like-heart_active');
  });

  galleryBackgroundCreate.prepend(galleryTitleCreate, galleryLikeCreate);
  gallery??ard??reate.prepend(buttonCreate, galleryImageCreate, galleryBackgroundCreate);
  gallery.prepend(gallery??ard??reate);
}





















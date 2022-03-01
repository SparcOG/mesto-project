//Открытие и закрытие попапа
let popupСlose = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');

function showPopup() {
  let popupItem = document.querySelector('.popup__item');
      popupItem.value = '';
  popupСlose.classList.remove('popup_opened');

}

function hidePopup() {
  popupСlose.classList.add('popup_opened');

}

editButton.addEventListener('click', hidePopup);
closeButton.addEventListener('click', showPopup);

//Очистка формы

